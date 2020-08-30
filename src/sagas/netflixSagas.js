import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import netflixServiceFactory from '../services/netflixServiceFactory';
import { requests } from '../helpers/utilities';

const requestsList = Object.entries(requests);

/**
 * Saga to fetch categorised movie details
 */
function* fetchMovieDetails() {
    try {
        let response = [];
        const res = yield all(requestsList.map((requestUrl) => {
            return call(function* () {
                response.push(yield call(netflixServiceFactory.getMovieDetails, requestUrl[1]));
            })
        }));
        yield put({ type: actionTypes.LOAD_MOVIES_SUCCEEDED, response });
    } catch (error) {
        yield put({ type: actionTypes.LOAD_MOVIES_FAILED, error });
    }
}

export function* netflixSagas() {
    yield takeLatest(actionTypes.LOAD_MOVIES_REQUEST, fetchMovieDetails)
}