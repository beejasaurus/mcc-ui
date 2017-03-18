import React from 'react';
import './CartItem.css';

const CartItem = (props) => (
    <li className="mcc-cart-item">
        <span className="mcc-cart-item-name">{props.name}</span>
        <button className="mcc-link mcc-list-button" value={props.value} onClick={props.onRemove}>
            -
        </button>
    </li>
);

export default CartItem;