import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
    page: pageReducer,
    user: userReducer
})