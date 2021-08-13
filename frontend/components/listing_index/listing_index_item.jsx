import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props

    return(
        <div className='listing-left-box'>
                <img className='listing-image' src={listing.photos[0]}></img>
                <Link className='listing-items-container' to={`/listings/${listing.id}`}>
                    <h1 className='listing-header'>
                        <div className='listing-description'>{listing.title}</div>
                    </h1>
                    <div className='listing-index-am'>
                        <p>
                            Wifi · Air conditioning · Kitchen · Heating
                        </p>
                        <br/>
                        <p>
                            Bedrooms: {listing.bedroom} · Bathrooms: {listing.bathroom}  
                        </p>
                    </div>
                    <div className='listing-price'>
                        <i className="fa fa-star"> {}</i>
                        <h1>
                            ${listing.price}<p>/ night</p>
                        </h1>
                    </div>
                </Link>
        </div>
    )
}

export default ListingIndexItem
