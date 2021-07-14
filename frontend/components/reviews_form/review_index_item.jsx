import React from 'react'

const ReviewIndexItem = props => {


    return (
        <div>
            <div>
                {/* {props.currentUser.username} */}
            </div>
            <div>Rating:
                {props.review.rating}
            </div>
            <div>Comment:
                {props.review.body}
            </div>
            <div>
                {props.currentUser && props.currentUser.id === props.review.user_id ? <button onClick={() => props.deleteReview(props.review.id)}>Delete</button> : '' }
            </div>
        </div>
    )
}

export default ReviewIndexItem