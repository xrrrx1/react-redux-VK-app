import {LOGIN_FAIL, LOGIN_SUCCESS} from "../../constants";

const initialState = {
    name: '',
    error: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            return { ...state, name: payload, error: '' };

        case LOGIN_FAIL:
            return { ...state, error: payload.message };

        default:
            return state
    }

}