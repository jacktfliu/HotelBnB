import React from 'react'

const ListingHeader = (listing) => {
    return (
        <div>
            <div>
                <h1>{listing.title}</h1>
            </div>

            <div>
                <div>{listing.location}</div>
            </div>
        </div>
    )
}

export default ListingHeader