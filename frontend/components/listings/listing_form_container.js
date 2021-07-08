import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_action';
import ListingForm from './listing_form';

const mSTP = (state) => ({
});

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
});

export default connect(mSTP,mDTP)(ListingForm);