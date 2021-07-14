import { connect } from "react-redux";
import { createReview, deleteReview,fetchReview } from "../../actions/review_action";
import ReviewsForm from "./reviews_form";

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id]
    return {
        reviews: state.entities.reviews,
        review: {
            body: "",
            rating: 0,
            user_id: state.session.id,
            listing_id: parseInt(ownProps.listingId)
        },
    }
};

const mDTP = dispatch => ({
    fetchReview: (review) => dispatch(fetchReview(review)),
    createReview: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewsForm);