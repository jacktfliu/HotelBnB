import React from 'react'
import {withRouter} from 'react-router'


class ListingForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listing: '',
            title: '', 
            price: '', 
            description: '', 
            location: '', 
            bedroom: '', 
            bathroom: '', 
            longitude: '', 
            latitude: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const listing = Object.assign({}, this.state)
        this.props.createListing(listing)
    }

    render(){
        <div className='new-listing-container'>
            <div className='new-listing-form'>
                <h1 classname='new-listing-title'>Create A Listing</h1>

                <form onSubmit={this.handleSubmit}>
                    <label className=''></label>

                </form>
            </div>
        </div>
    }
}

export default withRouter(ListingForm)