// Actions
const ADD_TO_CART = 'mcc/samples/ADD_TO_CART';
const REMOVE_FROM_CART = 'mcc/samples/REMOVE_FROM_CART';
const SELECT_CART_ITEM = 'mcc/samples/SELECT_CART_ITEM';

// Reducer
export const initialItem = {
    id: 0,
};

export function cartItem(state = initialItem, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                id: action.payload.id
            };
        default:
            return state;
    }
}

export const initialState = {
    cart: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    cartItem(undefined, action),
                ]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

// Selectors
export const getCart = (state) => state.cart.cart;

// Emitters
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: {
        id
    }
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {
        id
    }
});

export const selectCartItem = (id) => ({
    type: SELECT_CART_ITEM,
    payload: {
        id
    }
});