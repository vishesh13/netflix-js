import { combineReducers } from 'redux';
import oneState from './oneReducer';

const combinedReducers = combineReducers({
    oneState,
});

const rootReducers = combinedReducers;

export default rootReducers;