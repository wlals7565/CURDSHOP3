const express = require('express')
const ProductController = require('../controllers/products');
const productController = new ProductController();
const { verifyToken } = require('../middlewares')

const router = express.Router()

//라우터 설정
router.get('/all', productController.getProducts)

router.get('/:id', productController.getProductDetail)

router.post('/', verifyToken, productController.postProduct)

router.patch('/:id', verifyToken, productController.patchProduct)

router.delete('/:id', verifyToken, productController.deleteProduct)

module.exports = router
