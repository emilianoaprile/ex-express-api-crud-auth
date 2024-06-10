// rotte per autenticaziones
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const validator = require('../middlewares/validatorFunction.js');
const {registerBody} = require('../validations/usersValidation.js');

router.post('/register', validator(registerBody), authController.register)
// router.post('/login', authController.login)

module.exports = router;