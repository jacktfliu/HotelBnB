import React from 'react'

class ReviewsForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review

        this.updateBody = this.updateBody.bind(this)
        this.updateRating = this.updateRating.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

    }

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
            user_id: this.props.user_id,
            listing_id: this.props.listingId
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type='number'
                            value={this.state.rating}
                            onChange={this.updateRating}
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