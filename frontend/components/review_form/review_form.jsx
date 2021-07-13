import React from 'react';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: '',
      listing_id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListingShow = this.navigateToListingShow.bind(this);
  }



  navigateToListingShow() {
    this.props.history.push(`/listings/${this.props.match.params.listingId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = this.props.match.params.listingId

    const review = Object.assign({}, this.state, {listing_id: listingId});
    this.props.createReview(review);
    this.navigateToListingShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />

          <label>Comment</label>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <input type="submit" />
        </form>
        {/* <button onClick={this.navigateToListingShow}>Cancel</button> */}
      </div>
    );
 }
}

export default ReviewForm;
