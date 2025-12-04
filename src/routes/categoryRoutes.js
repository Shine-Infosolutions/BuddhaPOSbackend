const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const ctrl = require('../controllers/categoryController');

router.post('/', upload, ctrl.createItem);
router.get('/', ctrl.getAllItems);
router.get('/categories', ctrl.getDistinctCategories);
router.get('/category/:categoryName', ctrl.getItemsByCategory);
router.get('/:id', ctrl.getItemById);
router.put('/:id', upload, ctrl.updateItem);
router.patch('/:id/toggle', ctrl.toggleAvailability);
router.delete('/:id', ctrl.deleteItem);

module.exports = router;