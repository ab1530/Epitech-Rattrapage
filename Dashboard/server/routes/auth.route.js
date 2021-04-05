const express = require('express')
const router = express.Router()

const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator,
    validSign
} = require('../client/src/helpers/valid')

function about(req, res) {
    return res.status(200).json(require('../client/about.json'));
}

//Load Controllers
const {
    registerController,
    activationController,
    loginController
} = require('../controllers/auth.controller.js')

router.post('/api/register', validSign, registerController)
router.get('/about.json', about)
router.post('/api/login', validLogin, loginController)
router.post('/api/activation', activationController)
// router.post('/dashboard')

module.exports = router