import * as actionTypes from './actionTypes';

/**
 * function to dispatch movie details loading request
 */
export function loadMovieDetails() {
    return {
        type: actionTypes.LOAD_MOVIES_REQUEST,
    };
}

/**
 * function to dispatch login request
 */
export function loginUser() {
    return {
        type: actionTypes.LOGIN_REQUEST,
    };
}