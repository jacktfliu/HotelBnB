import * as APIUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews, 
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review, 
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});


export const fetchReviews = () => dispatch => (
  APIUtil.fetchReviews().then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const fetchReview = review => dispatch => (
  APIUtil.fetchReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteReview = reviewId => dispatch => (
  APIUtil.deleteReview(reviewId).then(reviewId =>(
    dispatch(removeReview(reviewId))
  ))
)

