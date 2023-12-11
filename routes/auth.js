const express = require('express')
const { verifyToken } = require('../middlewares')
const AuthController = require('../controllers/auth');
const authController = new AuthController();

const router = express.Router()

router.post('/join', authController.join)

router.post('/login', authController.login)

router.get('/myInfo', verifyToken, authController.getMyInfo)

module.exports = router
