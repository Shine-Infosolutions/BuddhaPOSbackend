const Order = require('../models/Order');

exports.createOrder = async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ message: 'Order Created', data: newOrder });
  } catch (error) { next(error); }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('items.categoryId');
    res.json(orders);
  } catch (error) { next(error); }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.categoryId');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) { next(error); }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.json(updated);
  } catch (error) { next(error); }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted successfully' });
  } catch (error) { next(error); }
};