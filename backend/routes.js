import express from 'express';
import { getOrders, createOrder, updateOrderStatus, deleteOrder } from './controller/orderController.js';
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from './controller/productController.js';
import { uploadMultiple } from "./config/upload.js";

const router = express.Router();


//ORDER MANAGEMENT
router.get('/orders', getOrders);
router.post('/order', createOrder);
router.put('/order/:id/status', updateOrderStatus);
router.delete('/order/:id', deleteOrder);

//PRODUCT MANAGEMENT
router.get('/products', getAllProducts);
router.get('/product/:id', getSingleProduct);
router.post('/product', uploadMultiple, createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
