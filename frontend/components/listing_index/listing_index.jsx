import React from 'react'
import ListingIndexItem from './listing_index_item'
import { Link } from 'react-router-dom'
import ListingMap from '../listing_map/listing_map'

class ListingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchListings()
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
                                    <p>Hello World!</p>
                                </div>
                            </div>
                            <div className='curved-button'>Cities
                                <div className="drop-content">
                                    <p>Hello World!</p>
                                </div>
                            </div>
                            <div className='curved-button'>Amentities
                                <div className="drop-content">
                                    <p>Hello World!</p>
                                </div>
                            </div>
                            <div className='curved-button'>Ratings
                                <div className="drop-content">
                                    <p>Hello World!</p>
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