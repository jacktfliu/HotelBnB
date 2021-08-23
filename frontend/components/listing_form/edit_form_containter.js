import React from 'react';
import { connect } from 'react-redux';
import { fetchListing, updateListing } from '../../actions/listing_action'
import ListingForm from './listing_form';
import {updateFilter} from '../../actions/filter_actions'

class EditForm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }

    render(){
        const {updateListing, formType, listing, action} = this.props
        return(
            <ListingForm
                history={this.props.history}
                updateListing={updateListing}
                formType={formType}
                listing={listing}
                action={action}/>
        )
    }
}


const mSTP = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.listingId],
    formType: 'Update Listing'
})

const mDTP = (dispatch) => ({
    fetchListing: listing => dispatch(fetchListing(listing)),
    action: listing => dispatch(updateListing(listing)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),

})

export default connect(mSTP, mDTP)(EditForm) 