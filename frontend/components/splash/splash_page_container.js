import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import SplashPage from './splashpage'


const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(null,mDTP)(SplashPage);