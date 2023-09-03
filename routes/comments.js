const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');


router.post('/api/comments', commentsController.newComment);

module.exports = router;