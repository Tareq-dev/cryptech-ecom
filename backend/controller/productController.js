import db from '../config/db.js';
import path from 'path';
import fs from 'fs';
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
  const { name, description, price, stock, content } = req.body;
  let { specification } = req.body;
  const photos = req.files;

  // Basic validation
  if (!name) {
    return res.status(400).json({ error: "Product name is required" });
  }
  if (!price || isNaN(price) || Number(price) <= 0) {
    return res.status(400).json({ error: "Price is required" });
  }
  if (!stock || isNaN(stock) || !Number.isInteger(Number(stock)) || Number(stock) < 0) {
    return res.status(400).json({ error: "Stock is required" });
  }

  // Parse specification JSON if it's a string
  try {
    if (typeof specification === 'string') {
      specification = JSON.parse(specification);
    }
  } catch (err) {
    return res.status(400).json({ error: "Invalid JSON format in specification" });
  }

  // Insert product
  const insertProductSql = `
    INSERT INTO products (name, description, price, stock, content, specification)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(insertProductSql, [name, description || '', price, stock, content || '', JSON.stringify(specification)], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const productId = result.insertId;

    // If photos exist
    if (photos && photos.length > 0) {
      const photoValues = photos.map(file => [productId, '/uploadsProducts/' + file.filename]);
      const insertPhotosSql = 'INSERT INTO product_photos (product_id, url) VALUES ?';

      db.query(insertPhotosSql, [photoValues], (err2, result2) => {
        if (err2) {
          console.error("Photos insert error:", err2);
          return res.status(500).json({ error: err2.message });
        }

        res.status(201).json({ message: '✅ Product and photos created successfully', productId });
      });
    } else {
      res.status(201).json({ message: '✅ Product created successfully', productId });
    }
  });
};


// Update product by id
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, content } = req.body;
  let { specification } = req.body;

  // Basic validation
  if (!name) {
    return res.status(400).json({ error: "Product name is required" });
  }
  if (!price || isNaN(price) || Number(price) <= 0) {
    return res.status(400).json({ error: "Valid price is required" });
  }
  if (!stock || isNaN(stock) || !Number.isInteger(Number(stock)) || Number(stock) < 0) {
    return res.status(400).json({ error: "Valid stock is required" });
  }

  // Parse specification JSON
  try {
    if (typeof specification === 'string') {
      specification = JSON.parse(specification);
    }
  } catch (err) {
    return res.status(400).json({ error: "Invalid JSON format in specification" });
  }

  // Update product info only
  const updateSql = `
    UPDATE products SET 
      name = ?, 
      description = ?, 
      price = ?, 
      stock = ?, 
      content = ?, 
      specification = ?
    WHERE id = ?
  `;

  db.query(
    updateSql,
    [name, description, price, stock, content, JSON.stringify(specification), id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: "✅ Product info updated (photos untouched)" });
    }
  );
};


// Delete product by id
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  // Step 1: Get all photo URLs from DB
  const getPhotosSql = 'SELECT url FROM product_photos WHERE product_id = ?';
  db.query(getPhotosSql, [id], (err, photos) => {
    if (err) return res.status(500).json({ error: err.message });

    // Step 2: Delete photo files from server
    photos.forEach(photo => {
      const filePath = path.join('public', photo.url);
      console.log("🧾 Trying to delete:", filePath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    // Step 3: Delete product from DB
    const deleteProductSql = 'DELETE FROM products WHERE id = ?';
    db.query(deleteProductSql, [id], (err2, result) => {
      if (err2) return res.status(500).json({ error: err2.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json({ message: "✅ Product and photos deleted successfully" });
    });
  });
};
