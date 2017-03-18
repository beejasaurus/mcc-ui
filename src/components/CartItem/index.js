import {connect} from 'react-redux';
import CartItem from './CartItem';
import {removeFromCart} from '../../redux/modules/cart';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onRemove(e){
        const id = parseInt(e.target.value,10);
        dispatch(removeFromCart(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);