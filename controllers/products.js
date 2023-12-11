const ProductService = require('../services/products')
const productService = new ProductService()

// 상품 목록 조회
module.exports = class ProductController {
  getProducts = async (req, res, next) => {
    try {
      const results = await productService.getProducts(req.query.sort)
      return res.send({ results })
    } catch (error) {
      next(error)
    }
  }

  // 상품 상세 조회
  getProductDetail = async (req, res, next) => {
    const productId = parseInt(req.params.id, 10)
    //여기서부터 서비스에 넣어주자.
    try {
      const result = await productService.getProductDetail(productId)
      if (!result) {
        res.status(404).json({
          code: 404,
          message: '입력하신 아아디에 해당하는 상품이 없습니다.',
        })
        return
      }
      return res.json({ result })
    } catch (error) {
      next(error)
    }
  }

  // 상품 작성 체크
  postProduct = async (req, res, next) => {
    const { product_name, content } = req.body
    const author = res.locals.user.id
    if (!product_name || !content) {
      res.status(400).json({
        code: 400,
        message: '요청 본문이 잘못되었습니다.',
      })
      return
    }
    try {
      const result = await productService.postProduct(
        product_name,
        content,
        author,
      )
      return res.json(result)
    } catch (error) {
      next(error)
    }
  }

  // 상품 수정
  patchProduct = async (req, res, next) => {
    const productId = parseInt(req.params.id, 10)
    const updatedData = {
      is_soldout: req.body.is_soldout,
      product_name: req.body.product_name,
      content: req.body.content,
    }
    //여기서부터 서비스에 넣어주자.
    try {
      const result = await productService.patchProduct(
        productId,
        updatedData,
        res.locals.user.id,
      )
      if (result.code != 200) {
        res.status(result.code).json(result)
        return
      }
      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  // 상품 삭제
  deleteProduct = async (req, res, next) => {
    const productId = parseInt(req.params.id, 10) // Assuming id is an integer
    //여기서부터 서비스에 넣어주자.
    try {
      const result = await productService.deleteProduct(
        productId,
        res.locals.user.id,
      )
      if (result.code != 200) {
        res.status(result.code).json(result)
        return
      }
      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}
