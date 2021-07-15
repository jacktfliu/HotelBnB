import React from 'react'

const ReviewIndexItem = props => {


    return (
        <div>
            <div>Rating:
                {props.review.rating}
            </div>
            <div>Comment:
                {props.review.body}
            </div>
            <div>
                {props.currentUser && props.currentUser.id === props.review.user_id ? <button onClick={() => props.deleteReview(props.review.id).then(() => {window.location.reload()})}>Delete</button> : '' }
            </div>
        </div>
    )
}

export default ReviewIndexItem