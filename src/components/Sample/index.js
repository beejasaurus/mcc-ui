import {compose} from 'redux';
import {connect} from 'react-redux';
import {DragSource} from 'react-dnd';
import Sample from './Sample';
import {addToCart} from '../../redux/modules/cart';
import {SAMPLE,selectSample} from '../../redux/modules/samples';

const dragSource = {
    beginDrag(props) {
        return {
            id: props.id,
            name: props.name,
        }
    }
};

const dragCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onAdd(e){
        const id = parseInt(e.target.value, 10);
        dispatch(addToCart(id));
    },
    onSelect(e) {
        const id = parseInt(e.target.dataset.value, 10);
        dispatch(selectSample(id));
    }
});

export default compose(
    DragSource(SAMPLE, dragSource, dragCollect),
    connect(mapStateToProps, mapDispatchToProps),
)(Sample);
