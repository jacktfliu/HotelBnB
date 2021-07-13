import * as APIUtil from '../util/listing_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings, 
})

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing, 
})

export const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const receiveReview = ({ review}) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const deleteReview = (reviewId) => dispatch => (
  APIUtil.deleteReview(reviewId).then(reviewId => (
    dispatch(removeReview(reviewId))
  ))
)

export const fetchListings = () => dispatch => (
  APIUtil.fetchListings().then(listings => (
    dispatch(receiveListings(listings))
  ))
);

export const fetchListing = listing => dispatch => (
  APIUtil.fetchListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ))
);

export const createListing = listing => dispatch => (
  APIUtil.createListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ))
);

export const updateListing = listing => dispatch => (
  APIUtil.updateListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ))
)

export const deleteListing = listingId => dispatch => (
  APIUtil.deleteListing(listingId).then(listingId =>(
    dispatch(removeListing(listingId))
  ))
)

