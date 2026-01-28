const express = require('express');
const postController = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router
    .route('/')
    .post(protect, postController.createPost)
    .get(postController.getAllPosts);

router
    .route('/:id')
    .get(postController.getPostById)
    .delete(protect, postController.deletePostById)
    .put(protect, postController.updatePostById);

module.exports = router;