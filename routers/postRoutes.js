const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const validator = require('../middlewares/validatorFunction.js');
const {bodyData} = require('../validations/postsValidation.js');


router.post('/', validator(bodyData), postController.create)
router.get('/', postController.index)
router.get('/search', postController.searchPostByContent)
router.get('/:slug', postController.show)
router.put('/:slug', validator(bodyData), postController.update)
router.delete('/:slug', postController.destroy)

module.exports = router;