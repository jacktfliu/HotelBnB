import React from 'react'
import ListingIndexItem from './listing_index_item'
import { Link } from 'react-router-dom'
import ListingMap from '../listing_map/listing_map'

class ListingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // console.log(this.props)
        this.props.fetchListings(this.props.filter)  
    }

    // componentWillUnmount(){
    //     this.props.clearFilters()
    // }
    
    componentDidUpdate(prevProps){
        if (prevProps.filter !== this.props.filter) {
            this.props.fetchListings(this.props.filter)
        }
    }

    render(){
        const {listings} = this.props
        return(
            <div className='listing-container'>
                <div className='listing-left-container'>
                    <div className='listing-left'>
                        <h1 className='listing-page-header'>Stays in a selected city</h1>
                        <div className='listing-page-button'>
                            <div className='curved-button'>Cancellation
                                <div className="drop-content">
                                    <p>Reservation cancellation can be done anytime and anywhere through the reservations page.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Cities
                                <div className="drop-content">
                                    <p>There are many different cities you can choose from. Go ahead and explore around.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Amentities
                                <div className="drop-content">
                                    <p>Every Listing has a variety of amentities that you can choose from.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Ratings
                                <div className="drop-content">
                                    <p>Listings have a average rating of 4.5 out of 5 stars </p>
                                </div>
                            </div>
                        </div>
                        <div className='words-container-index'>
                            <div className='stays-gif'></div>
                            <div className='listing-page-words'>More than 240,000 guests have used this website.
                                On average they rated their stays 4.8 out of 5 stars.
                            </div>
                        </div>
                        <div className='listings'>
                                {listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)} 
                        </div>
                    </div>
                </div>
                <div className='main-map'>
                    <div className='map-right'>
                        <ListingMap/>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListingIndex