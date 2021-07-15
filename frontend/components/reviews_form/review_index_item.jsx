import React from 'react'

const ReviewIndexItem = props => {


    return (
        <div className='review-container'>
            <div className='review-container'>
                {props.currentUser && props.currentUser.id === props.review.user_id ? <div className='x' onClick={() => props.deleteReview(props.review.id).then(() => {window.location.reload()})}>&times;</div> : '' }
            </div>
            <div className='current-comment-user'>{props.currentUser.username}</div>
            <div className='span1'></div>
            <div className='review-rating'> <i className="fa fa-star"></i> {props.review.rating}</div>
            <div className='review-comment'>{props.review.body}</div>
            <div className='span1'></div>
        </div>
    )
}

export default ReviewIndexItem