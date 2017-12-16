import { GET_PHOTOS_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from "../../constants";

const initialState = {
    year: 2016,
    photos: [],
    fetching: false,
    error: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: payload, fetching: true, error: '' };

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: payload, fetching: false, error: '' };

        case GET_PHOTOS_FAIL:
            return { ...state, error: payload.message, fetching: false };

        default:
            return state;
    }
}