import { combineReducers } from 'redux';

import core from './core';
import samples, * as fromSamples from './samples';
import cart, * as fromCart from './cart';

export default combineReducers({
    core,
    samples,
    cart,
});

export const getSamples = (state) => fromSamples.getSamples(state);
export const getSelectedSample = (state) => fromSamples.getSelectedSample(state);
export const getCart = (state) => fromCart.getCart(state);