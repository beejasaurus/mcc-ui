import {connect} from 'react-redux';
import SampleList from './SampleList';
import * as fromReducer from '../../redux/modules/reducer';

const mapStateToProps = (state) => ({
    samples: fromReducer.getSamples(state),
    cart: fromReducer.getCart(state).map(item => item.id),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleList);