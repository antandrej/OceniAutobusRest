const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

router.get('/api/reviews', reviewsController.getAllReviews);
router.get('/api/reviews10', reviewsController.get10Reviews);
router.get('/api/pretraga/:type/:by', reviewsController.getReviewsByType);


router.post('/api/reviews', reviewsController.newReview);

module.exports = router;