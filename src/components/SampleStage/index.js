import {connect} from 'react-redux';
import SampleStage from './SampleStage';
import * as select from '../../redux/modules/reducer';

const mapStateToProps = (state) => ({
    samples: select.getSamples(state),
    selected: select.getSelectedSample(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleStage);