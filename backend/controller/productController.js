import db from '../config/db.js';

// Get all products
 
export const getAllProducts = (req, res) => {
  const sql = `
    SELECT 
      p.id, p.name, p.description, p.price, p.stock, 
      p.content, p.specification, p.created_at,
      pp.url AS photo_url
    FROM products p
    LEFT JOIN product_photos pp ON p.id = pp.product_id
    ORDER BY p.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    // Process: group by product id
    const productsMap = {};

    results.forEach(row => {
      const productId = row.id;

      if (!productsMap[productId]) {
        productsMap[productId] = {
          id: row.id,
          name: row.name,
          description: row.description,
          content: row.content,
          specification: row.specification,
          price: row.price,
          stock: row.stock,
          created_at: row.created_at,
          photos: []
        };
      }

      if (row.photo_url) {
        productsMap[productId].photos.push(row.photo_url);
      }
    });

    // Convert to array
    const products = Object.values(productsMap);

    res.json(products);
  });
};

export const getSingleProduct = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT 
      p.id, p.name, p.description, p.price, p.stock, 
      p.content, p.specification, p.created_at,
      pp.url AS photo_url
    FROM products p
    LEFT JOIN product_photos pp ON p.id = pp.product_id
    WHERE p.id = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = {
      id: results[0].id,
      name: results[0].name,
      description: results[0].description,
      content: results[0].content,
      specification: results[0].specification,
      price: results[0].price,
      stock: results[0].stock,
      created_at: results[0].created_at,
      photos: []
    };

    results.forEach(row => {
      if (row.photo_url) {
        product.photos.push(row.photo_url);
      }
    });

    res.json(product);
  });
};
 

// ধরছি multer দিয়ে photos ফাইলগুলো req.files এ আসবে

export const createProduct = (req, res) => {
  const { name, description, price, stock, content, specification } = req.body;
  const photos = req.files;  // multer multiple upload files

  // Basic validation (তোমার মতো বাড়াতে পারো)
  if (!name || name.length < 3) {
    return res.status(400).json({ error: "Product name is required and should be at least 3 characters" });
  }
  if (!price || isNaN(price) || Number(price) <= 0) {
    return res.status(400).json({ error: "Valid price is required" });
  }
  if (!stock || isNaN(stock) || !Number.isInteger(Number(stock)) || Number(stock) < 0) {
    return res.status(400).json({ error: "Valid stock is required" });
  }

  // ১. Product insert
  const insertProductSql = `
    INSERT INTO products (name, description, price, stock, content, specification)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(insertProductSql, [name, description || '', price, stock, content || '', specification || ''], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const productId = result.insertId;

    // ২. যদি photos থাকে, আলাদা টেবিলে insert করো
    if (photos && photos.length > 0) {
      // photo URLs or filenames array
      const photoValues = photos.map(file => [productId, '/uploads/' + file.filename]);

      const insertPhotosSql = 'INSERT INTO product_photos (product_id, url) VALUES ?';

      db.query(insertPhotosSql, [photoValues], (err2, result2) => {
        if (err2) {
          console.error("Photos insert error:", err2);
          return res.status(500).json({ error: err2.message });
        }

        res.status(201).json({ message: 'Product and photos created successfully', productId });
      });
    } else {
      // যদি photo না থাকে
      res.status(201).json({ message: 'Product created successfully', productId });
    }
  });
};


// Update product by id
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;

  const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
  db.query(sql, [name, description || '', price, stock, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully" });
  });
};

// Delete product by id
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  });
};
