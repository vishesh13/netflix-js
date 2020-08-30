import React from 'react';
import NetflixContainer from '../components/containers/NetflixContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/NetflixStore';

const store = configureStore();
/**
 * Netflix Application class rendering the container
 */
class NetflixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NetflixContainer />
            </Provider>
        );
    }
}

export default NetflixApplication;