const express = require('express');
const router  = express.Router(); 
const reviewsController = require('../controllers/reviews');

router.get('/api/reviews', reviewsController.getReviews);

router.post('/api/reviews', reviewsController.newReview);

module.exports = router;