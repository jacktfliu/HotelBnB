import React from 'react'
import ListingIndexItem from './listing_index_item'
import { Link } from 'react-router-dom'

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
            <div>
                <div className='listing-right'>
                    {listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)} 
                </div>

                <div className='map-right'>
                    MAP
                </div>
            </div>
        )
    }
}


export default ListingIndex