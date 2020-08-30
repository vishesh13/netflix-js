import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const netflixReducer = (state = initialState.movieDetailsState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_MOVIES_REQUEST:
            return { ...state, };

        case actionTypes.LOAD_MOVIES_SUCCEEDED:
            const { response = [] } = action;
            return {
                ...state,
                details: [...response],
            };
        case actionTypes.LOAD_MOVIES_FAILED:
            return {
                ...state,
                isLoading: false,
                isFailed: true,
            };
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isFailed: false,
            }

        default:
            return state;
    }
};

export default netflixReducer;