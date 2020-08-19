import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const oneSectionReducer = (state = initialState.oneState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ONE_REQUEST:
            return { ...state, shouldChange: false };

        case actionTypes.LOAD_ONE_SUCCEEDED:
            return { ...state, shouldChange: true };

        default:
            return state;
    }
};

export default oneSectionReducer;