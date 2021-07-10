import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props

    return(
        <div className='listing-left-box'>
            <div className='listing-image'></div>
                <h1 className='listing-header'>
                    <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
                </h1>

                <div className='listing-price'>Price:
                    {listing.price}
                </div>

                <div className='listing-description'>Description:
                    {listing.description}
                </div>

        </div>
    )
}

export default ListingIndexItem
