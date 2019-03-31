const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.product_all);
router.get('/:id', product_controller.product_details);
router.post('/create', product_controller.product_create);
router.put('/update/:id', product_controller.product_update);
router.delete('/delete/:id', product_controller.product_delete);

module.exports = router;