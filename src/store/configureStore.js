import { createStore, applyMiddleware } from 'redux'
import mainReducer from '../reducers/mainReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
    // ...options
});

const store = createStore(
    mainReducer,
    applyMiddleware(thunk, logger)
);

window.store = store;

export default store