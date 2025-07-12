import db from '../config/db.js';

// Get all orders
export const getOrders = (req, res) => {
  db.query('SELECT * FROM orders ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Create a new order
export const createOrder = (req, res) => {
  const { customer_name, product_name, address, phone_no, quantity, price } = req.body;

  // Basic validation
  if (!customer_name || customer_name.length < 3) {
    return res.status(400).json({ error: "Valid Customer is required (min 3 characters)" });
  }


  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }

  const phoneRegex = /^[0-9]{11}$/;
  if (!phone_no || !phoneRegex.test(phone_no)) {
    return res.status(400).json({ error: "❌ Phone number is required (11 digits)" });
  }


  // If all valid, insert into DB
  const sql = `
    INSERT INTO orders (customer_name, product_name, address, phone_no, quantity, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [customer_name, product_name, address, phone_no, quantity, price], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, message: '✅ Order placed successfully' });
  });
};


// Update order status
export const updateOrderStatus = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE orders SET status = ? WHERE id = ?';
  db.query(sql, [status, id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: '✅ Order status updated successfully' });
  });
};

// delete order 
export const deleteOrder = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM orders WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: '✅ Order deleted successfully' });
  });
};

