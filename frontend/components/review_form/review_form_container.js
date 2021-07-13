import { connect } from 'react-redux';
import {createReview, deleteReview, fetchListing} from '../../actions/listing_action'
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {

}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchListing: (listing) => dispatch(fetchListing(listing))
});

export default connect(mSTP ,mDTP)(ReviewForm);
