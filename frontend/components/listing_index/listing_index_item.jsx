import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props

    return(
        <div className='listing-left-box'>
            <div className='listing-image'>IMAGE PLACEHOLDER</div>
                <div className='listing-items-container'>
                    <h1 className='listing-header'>
                        <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
                    </h1>

                    <div className='listing-description'>
                        {listing.description}
                    </div>

                    <div className='listing-index-am'>
                        Wifi * Air conditioning * Kitchen * Heating
                    </div>

                    <div className='listing-price'>
                        ${listing.price} / night
                    </div>
                </div>
        </div>
    )
}

export default ListingIndexItem
