import { connect } from 'react-redux'
import { createListing } from '../../actions/listing_action'
import ListingForm from './listing_form'
import { updateFilter } from '../../actions/filter_actions'

const mSTP = (state) => ({
    listing: {
        title: '',
        price: '',
        description: '', 
        location: '',
        bedroom: '',
        bathroom: '',
        longitude: '',
        latitude: '',
        owner_id: state.session.id,
        host_name: '', 
        city: '',
    },
})

const mDTP = (dispatch) => ({
    action: listing => dispatch(createListing(listing)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(mSTP, mDTP)(ListingForm)