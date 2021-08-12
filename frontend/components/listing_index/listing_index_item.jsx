import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props

    return(
        <div className='listing-left-box'>

                <img className='listing-image' src={listing.photos[0]}></img>

                <Link className='listing-items-container' to={`/listings/${listing.id}`}>
                    <h1 className='listing-header'>
                        <div className='listing-title'>{listing.title}</div>
                    </h1>

                    <div className='listing-description'>
                        {listing.description}
                    </div>

                    <div className='listing-index-am'>
                        Wifi · Air conditioning · Kitchen · Heating
                    </div>

                    <div className='listing-price'>
                        ${listing.price} / night
                    </div>
                </Link>
        </div>
    )
}

export default ListingIndexItem
