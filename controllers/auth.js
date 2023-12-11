const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { user } = require('../models')

const AuthService = require('../services/auth')
const authService = new AuthService()

module.exports = class AuthController {
  join = async (req, res, next) => {
    const { email, password, passwordConfirm, nick } = req.body
    if (!email || !password || !passwordConfirm || !nick) {
      res
        .status(400)
        .json({ code: 400, message: '요청 본문이 잘못되었습니다.' })
      return
    }
    try {
      const result = await authService.join(
        email,
        password,
        passwordConfirm,
        nick,
      )
      return res.status(result.code).json(result)
    } catch (error) {
      next(error)
    }
  }

  login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
      res
        .status(400)
        .json({ code: 400, message: '요청 본문이 잘못되었습니다.' })
      return
    }
    try {
      const result = await authService.login(email, password);
      return res.status(result.code).json(result)
    } catch (error) {
      return next(error)
    }
  }

  getMyInfo = async (req, res, next) => {
    //여기서부터 서비스에 넣어주자.
    try {
      const result = await authService.getMyInfo(res.locals.user.id)
      return res.status(result.code).json(result)
    } catch (error) {
      return next(error)
    }
  }
}
