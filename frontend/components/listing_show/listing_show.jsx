import React from 'react'
import { Link } from 'react-router-dom'
import ReviewsFormContainer from '../reviews_form/reviews_form_container'
import ReviewIndexItem from '../reviews_form/review_index_item'
import ListingMap from '../listing_map/listing_map'
import ReservationFormContainer from '../reservation/reservation_container'



class ListingShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }

        this.scrollFunc = this.scrollFunc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.userEditDelete = this.userEditDelete.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.deleteListing(this.props.listing.id).then(
            (list) => this.props.history.push(`/listings`)
        )
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId).then(() =>{
            this.setState({loading: false})
        })
        // this.props.fetchReviews()
        // this.props.fetchReview(this.props.match.params.reviewId)
    }

    compononetDidUpdate(){

        if (this.props.listingId){
            this.props.fetchListing(this.props.match.params.listingId)
        } 
    }

    userEditDelete(){
        return(
            <div className='edit-delete-wrapper'>
                <button className='edit-delete' onClick={() => this.props.history.push(`/listings/${this.props.listing.id}/edit`)}>Edit Listing</button>
                <button className='edit-delete' onClick={this.handleSubmit}>Delete Listing</button>
            </div>
        )
    }

    scrollFunc() {
        window.onscroll = function () {
            if ($(window).scrollTop() >= 480 && $(window).scrollTop() <= 895) {
                $(".booking-container").css("position", "fixed")
                $(".booking-container").css("transform", "translateY(-150%)")
            } else if ($(window).scrollTop() >= 895) {
                $(".booking-container").css("position", "absolute")
                $(".booking-container").css("transform", "translateY(150%)")
            } else {
                $(".booking-container").css("position", "absolute")
                $(".booking-container").css("transform", "translateY(0%)")
            }
        }
    }

    
    render(){
        if (this.state.loading){
            return null
        }
        this.scrollFunc()

        const {listing, currentUser, listingId, reviews, deleteReview} = this.props
        
        let reviewItems = reviews.map(review => {
                return (
                <ReviewIndexItem key={review.id} review={review} deleteReview={deleteReview} currentUser={currentUser}/>   
                )
            }  
        )

        return(
            <div className='show-container'>
                <div className='show-header'>
                    <Link className='back-to-listing' to='/listings'>
                        <i className="fa fa-chevron-left"></i>
                        Back to listings
                    </Link>
                    <h1 className='show-title'>{listing.title}</h1>
                    <div className='edit-delete-container'>
                        <p className='show-location'>
                            Location: {listing.location} · Bedroom: {listing.bedroom} · Bathroom: {listing.bathroom}
                        </p>
                        {this.props.currentUser ? currentUser.id === listing.owner_id ? this.userEditDelete() : '' : '' }
                    </div>
                </div>
                
                <div className='show-photo'>
                    <div className='show-photo-left'>
                        <img className='show-photo-one'src={listing.photos[0]}></img>
                    </div>

                    <div className='show-photo-right'>
                        <div className='show-photo-down'>
                            <img className='show-photo-1'src={listing.photos[1]}></img>
                            <img className='show-photo-2'src={listing.photos[2]}></img>
                        </div>
                        <div className='show-photo-up'>
                            <img className='show-photo-3'src={listing.photos[3]}></img>
                            <img className='show-photo-4'src={listing.photos[4]}></img>
                        </div>
                    </div>
                </div>

                <div className='body-container'>
                    <div className='show-body'>
                        <div className='show-body-header'>Entire place hosted by {listing.host_name}</div>
                        <div className='show-body-header2'>Have the entire place to yourself!</div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-header'>{listing.host_name} is a superhost</div>
                        <div className='superhost'> 
                            <i className="fa fa-medal"></i> 
                            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. </p>
                        </div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-body'> 
                            <p>Good to know</p>
                            <ul className='show-inside-body'>· Entire home to yourself</ul>
                            <ul className='show-inside-body'>· Committed to Enhanced Clean</ul>
                        </div>
                        <div className='span1'></div>
                        <div className='description-box-container'>
                            <h1>What this place is all about</h1>
                            <p>{listing.description}</p>
                        </div>
                        <div className='span1'></div>
                        <h1 className='amentities-header'>What this place offers</h1>
                        <div className='show-amentities'>
                            <div className='show-box1'>
                                <ul className='amentities-bullet-point'>· Bedroom</ul>
                                <ul className='amentities-bullet-point'>· Bathroom</ul>
                                <ul className='amentities-bullet-point'>· Kitchen</ul>
                                <ul className='amentities-bullet-point'>· Air conditioning</ul>
                                <ul className='amentities-bullet-point'>· Microwave</ul>
                            </div>
                            <div className='show-box1'>
                                <ul className='amentities-bullet-point'>· Wifi</ul>
                                <ul className='amentities-bullet-point'>· Pets allowed</ul>
                                <ul className='amentities-bullet-point'>· Refrigerator</ul>
                                <ul className='amentities-bullet-point'>· Breakfast</ul>
                                <ul className='amentities-bullet-point'>· Parking</ul>
                            </div>
                        </div>
                    </div>
                    <div className='listing-price'>
                        <div className='booking-container'>
                            <ReservationFormContainer listingId={listingId} listing={listing}/>
                        </div>
                    </div>
                </div>

                <div className='show-review-box'>
                    <div className='review-box'>
                        {reviewItems}
                    </div>
                </div>           
                <div className='review-submit'>
                    <ReviewsFormContainer listingId={listingId} />
                </div>
                <div className='show-map-container'>
                    <div className='grey-line'></div>
                    <div className='map-where'>
                        Where you'll be staying
                    </div>
                    <div className='show-map'>
                        <ListingMap/>
                    </div>
                </div>
            </div>
        )}
    }


export default ListingShow


                    
                    
            