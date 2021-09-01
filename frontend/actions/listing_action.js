import * as APIUtil from '../util/listing_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS ';

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

export const receiveErrors = errors => ({
    type: RECEIVE_LISTING_ERRORS,
    errors
});


export const fetchListings = (location) => dispatch => (
  APIUtil.fetchListings(location).then(listings => (
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
    dispatch(receiveListing(listing))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateListing = (formData, listingId) => dispatch => (
  APIUtil.updateListing(formData, listingId).then(listing => (
    dispatch(receiveListing(listing))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const deleteListing = listingId => dispatch => (
  APIUtil.deleteListing(listingId).then(listingId =>(
    dispatch(removeListing(listingId))
  ))
)

