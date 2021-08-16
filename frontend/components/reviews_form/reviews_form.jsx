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
        this.updateName = this.updateName.bind(this)
    }

    ratingChanged(rating){
        this.setState({
            rating: rating
        })
    };


    updateBody(e){
        this.setState({body: e.currentTarget.value})
    }

    updateName(e){
        this.setState({review_name: e.currentTarget.value})
    }

    updateRating(e){
        this.setState({rating: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.props.currentUser){
            this.props.createReview(this.state)
            this.setState({
                review_name: '',
                body: '',
                rating: 0,
                listing_id: this.props.listingId,
            })
        } else {
            this.props.openModal('login')
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className='review-form-container'>
                    <label className='review-form-label'>
                       
                       <div className='review-stars'>
                            <ReactStars
                                count={5}
                                onChange={this.ratingChanged}
                                value={this.state.rating}
                                size={24}
                                color="lightgray"
                                activeColor="#FF5A5F"
                                className='stars'
                            />
                       </div>
                        <div className='review-name'>
                            <textarea
                                value={this.state.review_name}
                                onChange={this.updateName}
                                placeholder='Please enter your name' 
                            />
                        </div>
                        <div className='review-box'>
                            <textarea
                                cols="30"
                                rows="10"
                                value={this.state.body}
                                onChange={this.updateBody}
                                placeholder='write a review'
                            />
                        </div>
                    </label>
                 <input type="submit" className='review-submit-button'/>
                </form>
            </div>
        )
    }
}

export default ReviewsForm