import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props

    return(
        <div>
            <h1 className='listing-header'>
                <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
            </h1>

            <label className='listing-price'>Price:
                {listing.price}
            </label>

            <label className='listing-description'>Description:
                {listing.description}
            </label>

        </div>
    )
}

export default ListingIndexItem
