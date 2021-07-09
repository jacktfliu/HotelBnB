import { create } from 'enhanced-resolve'
import React from 'react'
import { connect } from 'react-redux'

import { createListing } from '../../actions/listing_action'
import ListingShow from '../listing_show/listing_show'
import ListingForm from './listing_form'

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(ListingForm)