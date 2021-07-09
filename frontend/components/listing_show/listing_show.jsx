import React from 'react'
import ListingHeader from './listing_show_header'
import ListingBody from './listing_show_body'

class ListingShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchListings()
    }

    render(){
        return(
            <div>
                <div>
                    <ListingHeader/>
                    SINGLE LISTING
                    <ListingBody/>
                </div>
            </div>
        )
    }
}

export default ListingShow