import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_action';
import ListingShow from './listing.show';

const mSTP = (state, { match }) => {
  const ListingId = parseInt(match.params.id);
  return {
    ListingId,
  };
};

const mDTP = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(mSTP,mDTP)(ListingShow);
