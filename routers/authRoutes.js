// rotte per autenticaziones
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
// const validator = require('../middlewares/validatorFunction.js');
// const {bodyRegister, bodyLogin} = require('../validations/userValidation.js');

router.post('/register', authController.register)
// router.post('/login', authController.login)

module.exports = router;