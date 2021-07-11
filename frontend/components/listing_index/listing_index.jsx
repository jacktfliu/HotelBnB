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
            <div className='listing-container'>
                <div className='listing-left'>
                    <h1 className='listing-page-header'>Stays in a selected city</h1>
                    <div className='listing-page-button'>
                        <button className='curved-button'>PlaceHolder button1</button>
                        <button className='curved-button'>button2</button>
                        <button className='curved-button'>button3</button>
                        <button className='curved-button'>button4</button>
                    </div>

                    <div className='listing-page-words'>More than 240,000 guests have used this website.
                        On average they rated their stays 4.8 out of 5 stars.
                    </div>
                    <div className='listings'>
                            {listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)} 
                    </div>
                </div>
                <div className='main-map'>
                    <div className='map-right'>
                        MAP
                    </div>
                </div>
            </div>
        )
    }
}


export default ListingIndex