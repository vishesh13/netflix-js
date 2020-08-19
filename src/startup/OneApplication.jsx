import React from 'react';
import OneContainer from '../components/OneContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/OneStore';

const store = configureStore();
class OneApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <OneContainer />
            </Provider>
        );
    }
}

export default OneApplication;