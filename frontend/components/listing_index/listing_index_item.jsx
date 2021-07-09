import React from "react";
import {Link} from 'react-router-dom'

const ListingIndexItem = props => {
    const {listing}  = props
    // console.log(props)
    return(
        <div>
            <h1>
                <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
            </h1>

            <label>Price:
                {listing.price}
            </label>

            <label>Description:
                {listing.description}
            </label>
        </div>
    )
}

export default ListingIndexItem
