import {connect} from 'react-redux';
// import {compose} from 'redux';
import SampleCart from './SampleCart';
import {getSamples,getCart} from '../../redux/modules/reducer';
import {DropTarget} from 'react-dnd';
import {SAMPLE} from '../../redux/modules/samples';
import {addToCart} from '../../redux/modules/cart';

const dropTarget = {
    drop(props, monitor, component) {
        var sample = monitor.getItem();
        props.onDrop(sample.id);
    },
    // hover(props,monitor,connect) {
    //     console.log('is hovering');
    // },
    // canDrop(props,monitor) {
    //     console.log('can drop');
    // }
};

const dropCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
});

const mapStateToProps = (state) => ({
    samples: getSamples(state),
    cart: getCart(state)
});

const mapDispatchToProps = (dispatch) => ({
    onDrop(id) {
        // console.log('onFoo');
        dispatch(addToCart(id));
    }
});

// export default compose(
//     DropTarget(SAMPLE, dropTarget, dropCollect),
//     connect(mapStateToProps, mapDispatchToProps),
// )(SampleCart);
export default connect(mapStateToProps, mapDispatchToProps)(
    DropTarget(SAMPLE, dropTarget, dropCollect)(SampleCart)
)

// SampleCart = DropTarget(SAMPLE, dropTarget, dropCollect)(SampleCart);
// export default connect(mapStateToProps,mapDispatchToProps)(SampleCart);