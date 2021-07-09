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
                <h1>THIS IS ALL THE LISTINGS</h1>
               {listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)} 
            </div>
        )
    }
}


export default ListingIndex