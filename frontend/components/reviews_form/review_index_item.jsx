import React from 'react'

const ReviewIndexItem = props => {
    return (
        <div>
            <div>
                {props.review.body}
            </div>
            <div>
                {props.review.rating}
            </div>
            <div>
                <button onClick={() => props.deleteReview(props.reviewId)}></button>
            </div>
        </div>
    )
}

export default ReviewIndexItem