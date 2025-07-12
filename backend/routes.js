import express from 'express';
import { getOrders, createOrder, updateOrderStatus } from './controller/orderController.js';

const router = express.Router();


//ORDER MANAGEMENT
router.get('/orders', getOrders);
router.post('/order', createOrder);
router.put('/:id/status', updateOrderStatus);

export default router;
