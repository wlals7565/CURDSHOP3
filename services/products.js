const { product } = require('../models')

// 상품 목록 조회
module.exports = class ProductService {
  getProducts = async (sortMethod) => {
    if (sortMethod != 'desc' && sortMethod != 'asc') {
      sortMethod = 'desc'
    }
    const results = await product.findMany({
      select: {
        id: true,
        product_name: true,
        content: true,
        is_soldout: true,
        created_at: true,
        user: {
          select: {
            nick: true,
            email: true,
          },
        },
      },
      orderBy: {
        created_at: sortMethod,
      },
    })
    return results
  }

  // 상품 상세 조회
  getProductDetail = async (productId) => {
    const result = await product.findUnique({
      where: { id: productId },
      select: {
        id: true,
        product_name: true,
        content: true,
        is_soldout: true,
        created_at: true,
        user: {
          select: {
            nick: true,
            email: true,
          },
        },
      },
    })
    return result
  }

  // 상품 작성 체크
  postProduct = async (product_name, content, author) => {
      const newProduct = await product.create({
        data: {
          product_name,
          content,
          author,
          created_at: new Date().toISOString(),
        },
      })
      return {
        code: 200,
        message: '상품 등록에 성공하셨습니다.',
      }
    
  }

  // 상품 수정
  patchProduct = async (productId, updatedData, userId) => {
      const exProduct = await product.findUnique({
        where: { id: productId },
      })
      if (!exProduct) {
        return {
            code: 404,
            message: '상품 조회에 실패했습니다.',
          }
      }
      if (exProduct.author !== userId) {
        return {
            code: 401,
            message: '해당 상품을 수정할 권한이 없습니다',
          }
      }
      await product.update({
        where: { id: productId },
        data: updatedData,
      })
      return {
        code: 200,
        message: '상품을 성공적으로 수정하였습니다.',
      }
    
  }

  // 상품 삭제
  deleteProduct = async (productId, userId) => {
      const exProduct = await product.findUnique({
        where: { id: productId },
      })

      if (!exProduct) {
        return {
            code: 404,
            message: '상품 조회에 실패했습니다.',
          }
      }

      if (exProduct.author !== userId) {
        return {
            code: 401,
            message: '해당 상품을 삭제할 권한이 없습니다',
          }
      }

      await product.delete({
        where: { id: productId },
      })
      return {
        code: 200,
        message: '상품을 성공적으로 삭제하였습니다.',
      }
  }
}
