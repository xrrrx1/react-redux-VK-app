import {createStore} from 'redux'
import mainReducer from '../reducers/mainReducer'

const store = createStore(mainReducer);

window.store = store;

export default store