import express from 'express';
import { getOrders, createOrder, updateOrderStatus, deleteOrder } from './controller/orderController.js';

const router = express.Router();


//ORDER MANAGEMENT
router.get('/orders', getOrders);
router.post('/order', createOrder);
router.put('/order/:id/status', updateOrderStatus);
router.delete('/order/:id', deleteOrder );

export default router;
