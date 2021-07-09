import React from 'react'
import ListingHeader from './listing_show_header'
import ListingBody from './listing_show_body'


class ListingShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchListing(this.props.match.params.listingId).then(() =>{
            this.setState({loading: false})
        })
    }

    compononetDidUpdate(){
        debugger
        if (this.props.listingId){
            this.props.fetchListing(this.props.match.params.listingId)
        } 
    }


    render(){
        const {listing} = this.props
        if (this.state.loading){
            debugger
            return(
                <>
                    loading
                </>
            )
        } else {
            debugger
        return(
            <div>
                <div>
                    <ListingHeader/>
                        <div>
                            <h1>Title: {listing.title}</h1>
                            <p>Price: {listing.price}</p>
                            <p>Description: {listing.description}</p>
                            <p>Location: {listing.location}</p>
                            <p>Bedroom: {listing.bedroom}</p>
                            <p>Latitude: {listing.latitude}</p>
                            <p>Longitude: {listing.longitude}</p>
                        </div>
                    <ListingBody/>
                </div>
            </div>
        )
        }
    }
}

export default ListingShow