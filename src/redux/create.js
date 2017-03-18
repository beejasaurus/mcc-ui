import {createStore} from 'redux';
import reducer from './modules/reducer';
import middleware from './middleware/client';

const create = (preloadedState) => {
    return createStore(
        reducer,
        preloadedState,
        middleware,
    );
};

export default create;