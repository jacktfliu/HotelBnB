import React from 'react'
import { Link } from 'react-router-dom'


class ListingShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
    }

    compononetDidUpdate(){
        
        if (this.props.listingId){
            this.props.fetchListing(this.props.match.params.listingId)
        } 
    }


    render(){
        const {listing, deleteListing} = this.props
        if (this.state.loading){
            
            return(
                <>
                    loading
                </>
            )
        } else {
            
        return(
            <div className='show-container'>
                <div className='show-header'>
                    <div>
                        <h1 className='show-title'>{listing.title}</h1>
                    </div>

                    <div className='show-review-box'>
                        <Link className='show-reviews'>Reviews</Link>
                    </div>
                    <div>
                        <p>Location: {listing.location}</p>
                    </div>
                    <div>
                        <Link to={`/listings/${listing.id}/edit`}>Edit Listing</Link>
                        <button onClick={this.handleSubmit}>Delete Event</button>
                    </div>
                </div>
                
                <div className='show-photo-left'>
                    <div className='show-photo-one'>PHOTOS</div>
                </div>

                <div className='show-photo-right'>
                    <div className='show-photo-two'></div>
                    <div className='show-photo-two'></div>
                    <div className='show-photo-two'></div>
                    <div className='show-photo-two'></div>
                </div>

                <div className='show-body'>
                    <p>Price: {listing.price}</p>
                    <p>{listing.description}</p>
                    <p>Bedroom: {listing.bedroom}</p>
                    <p>Latitude: {listing.latitude}</p>
                    <p>Longitude: {listing.longitude}</p>
                </div>
            </div>
        )
        }
    }
}

export default ListingShow
