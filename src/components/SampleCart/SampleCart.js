import React from 'react';
import './SampleCart.css';
import CartItem from '../CartItem';

const SampleCart = (props) => {
    const {connectDropTarget,isOver} = props;
    const hoverStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: 'yellow'
    };

    return connectDropTarget(
        <section className="mcc-sample-cart">
            <header className="mcc-sample-cart-header">
                Cart
            </header>
            {isOver && <div style={hoverStyle}/>}
            <nav className="mcc-sample-list-container">
                {props.cart.length ? (
                    <ul>
                        {props.cart.map(item => (
                            <CartItem key={item.id} name={props.samples[item.id].name} value={item.id}/>
                        ))}
                    </ul>
                ) : 'Nothing in cart'}
            </nav>
            <footer className="mcc-sample-cart-footer">
                Checkout
            </footer>
        </section>
    );
};

export default SampleCart;
