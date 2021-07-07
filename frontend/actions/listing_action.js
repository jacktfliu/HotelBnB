import * as APIUtil from '../util/listing_api_util'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'RECEIVE_LISTING'

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings, 
})

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing, 
})

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