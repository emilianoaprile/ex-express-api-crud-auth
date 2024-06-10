const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const validator = require('../middlewares/validatorFunction.js');
const {bodyData} = require('../validations/categoriesValidation.js');
const {paramID} = require('../validations/genericValidation.js');


router.post('/', validator(bodyData), categoryController.create)
router.get('/', categoryController.index)

// MW routes per controllare che l'id sia un numero intero
router.use('/:id', validator(paramID))

router.get('/:id', categoryController.show)
router.put('/:id', validator(bodyData), categoryController.update)
router.delete('/:id', categoryController.destroy)

module.exports = router;