import {applyMiddleware,compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from './logger';

const composeEnhancers = (typeof window !== 'undefined') ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const middleware = applyMiddleware(
    logger,
    ReduxThunk,
);

export default composeEnhancers(middleware);