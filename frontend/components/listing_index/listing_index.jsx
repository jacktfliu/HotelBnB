import React from 'react'

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
                <h1>This be the Listings</h1>
               {this.props.listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)} 
            </div>
        )
    }
}


export default ListingIndex