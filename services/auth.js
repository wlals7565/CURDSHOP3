const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { user } = require('../models')

module.exports = class AuthService {
  join = async (email, password, passwordConfirm, nick) => {
    //여기서부터 서비스에 넣어주자.
    const exUser = await user.findUnique({ where: { email } })
    if (exUser) {
      return { code: 409, message: '해당 이메일은 이미 가입되어 있습니다.' }
    }
    if (password != passwordConfirm) {
      return {
        code: 400,
        message: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
      }
    }
    if (password.length < 6) {
      return {
        code: 400,
        message:
          '비밀번호가 너무 짧습니다. 6자 이상의 비밀번호를 입력해주세요.',
      }
    }
    const hash = await bcrypt.hash(password, 12)
    await user.create({
      data: {
        email,
        password: hash,
        nick,
      },
    })
    return {
      code: 200,
      email,
      nick,
    }
  }

  login = async (email, password) => {
    const exUser = await user.findUnique({ where: { email } })
    if (!exUser) {
      return {
        code: 404,
        message: '해당 이메일은 가입되어 있지 않은 이메일입니다',
      }
    }
    const result = await bcrypt.compare(password, exUser.password)
    if (!result) {
      return { code: 401, message: '비밀번호가 일치하지 않습니다.' }
    }
    const token = jwt.sign(
      {
        id: exUser.id,
        email: exUser.email,
        nick: exUser.nick,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '12h',
        issuer: 'IJH',
      },
    )
    return {
      code: 200,
      message: '성공적으로 로그인 하였습니다. 인증용 토큰이 발급됩니다.',
      token,
    }
  }

  getMyInfo = async (userId) => {
    //여기서부터 서비스에 넣어주자.
    const exUser = await user.findUnique({
      where: { id: userId },
      select: { email: true, nick: true },
    })
    return {
      code: 200,
      message: '내 정보 조회 결과입니다.',
      email: exUser.email,
      nick: exUser.nick,
    }
  }
}
