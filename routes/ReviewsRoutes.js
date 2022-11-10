//
const express =require('express');
const { 
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
 } = require('../controllers/ReviewsController');
//definir objeto de ruteo

const router = express.Router()

router.route('/')
 .get(getAllReviews)
 .post(createReview)

//Crear rutas con parametros
router.route('/:id')
 .get(getSingleReview)
 .put(updateReview)
 .delete(deleteReview)

module.exports = router