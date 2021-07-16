import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

class ReviewsForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review

        this.updateBody = this.updateBody.bind(this)
        this.updateRating = this.updateRating.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.ratingChanged = this.ratingChanged.bind(this)
    }

    ratingChanged(rating){
        this.setState({
            rating: rating
        })
    };


    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    updateRating(e){
        this.setState({rating: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault()

        this.props.createReview(this.state)
        this.setState({
            body: '',
            rating: 0,
            listing_id: this.props.listingId
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                       
                        <ReactStars
                            count={5}
                            onChange={this.ratingChanged}
                            value={this.state.rating}
                            size={24}
                            color="lightgray"
                            activeColor="#FF5A5F"
                        />
                      
                        <textarea
                            cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.updateBody}
                            placeholder='write a review'
                        />
                    </label>
                 <input type="submit" />
                </form>
            </div>
        )
    }
}

export default ReviewsForm