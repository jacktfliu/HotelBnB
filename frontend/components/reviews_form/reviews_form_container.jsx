import { connect } from "react-redux";
import { createReview, deleteReview } from "../../actions/review_action";
import ReviewsForm from "./reviews_form";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    review: {
        body: "",
        rating: 0,
    },
    // user_id: currentUser.id,
    // listing_id: ownProps.match.params.listingId
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewsForm);