import React from 'react'
import { Link } from 'react-router-dom'
import ReviewsFormContainer from '../reviews_form/reviews_form_container'
import ReviewIndexItem from '../reviews_form/review_index_item'
import ListingMap from '../listing_map/listing_map'



class ListingShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }


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
            <div>
                <Link to={`/listings/${this.props.listing.id}/edit`}>Edit Listing</Link>
                <button onClick={this.handleSubmit}>Delete Event</button>
            </div>
        )
    }

    
    render(){
        if (this.state.loading){
            return null
        }
        

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
                    <div>
                        <h1 className='show-title'>{listing.title}</h1>
                    </div>
                    
                    <div>
                        <p className='show-location'>Location: {listing.location}</p>
                    </div>
                    <div>
                        {this.props.currentUser ? currentUser.id === listing.owner_id ? this.userEditDelete() : '' : '' }
                    </div>
                </div>
                
                <div className='show-photo'>
                    <div className='show-photo-left'>
                        <div className='show-photo-one'></div>
                    </div>

                    <div className='show-photo-right'>
                        <div className='show-photo-1'></div>
                        <div className='show-photo-2'></div>
                    </div>
                    <div className='show-photo-right'>
                        <div className='show-photo-3'></div>
                        <div className='show-photo-4'></div>
                    </div>
    
                </div>
                <div className='body-container'>
                    <div className='show-body'>
                        <div className='show-body-header'>Entire place hosted by Jack</div>
                        <div className='show-body-header2'>Maximum {listing.bedroom} guests · whole place · Bedroom: {listing.bedroom}</div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-header'>Jack is a superhost</div>
                        <div className='superhost'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. </div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-body'> 
                            <ul className='show-inside-body'>· Entire home to yourself</ul>
                            <ul className='show-inside-body'>· Committed to Enhanced Clean</ul>
                            </div>
                        <div className='span1'></div>
                         {/* <p>{listing.description}</p> */}
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

                    {/* show-body */}
                    {/*should be a form */}
                    <div className='listing-price'>
                        <div className='booking-container'>
                            <div className='price-container'>
                                <p className='booking-price'>${listing.price} / night</p>
                            </div>
                            <div className='date-wrapper'>
                                <input type='date' className='date-button'/>
                                <input type='date' className='date-button'/>
                            </div>
                            <button className='guest-button'>1 Guest</button>
                            <button className='check-ava'>Reserve</button>
                        </div>
                    </div>
                </div>
                
                <div className='review-box'>
                   {reviewItems}
                </div>

                <div className='review-submit'>
                    <ReviewsFormContainer listingId={listingId}/>
                </div>
                <div className='span1'></div>
                <div className='show-map-container'>
                    <div className='map-where'>
                        Where you'll be
                    </div>
                    <div className='show-map'>
                        <ListingMap/>
                    </div>
                </div>
            </div>
        )
        }
    }


export default ListingShow


                    
                    
            