const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController.js');
const validator = require('../middlewares/validatorFunction.js');
const {bodyData} = require('../validations/tagsValidation.js');
const {paramID} = require('../validations/genericValidation.js');


router.post('/', validator(bodyData), tagController.create)
router.get('/', tagController.index)

// MW routes per controllare che l'id sia un numero intero
router.use('/:id', validator(paramID))

router.get('/:id', tagController.show)
router.put('/:id', validator(bodyData), tagController.update)
router.delete('/:id', tagController.destroy)

module.exports = router;