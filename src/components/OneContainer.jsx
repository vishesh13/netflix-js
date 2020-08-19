import React from 'react';
import PropTypes from 'prop-types';
import OneView from './OneView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as oneActions from '../actions/oneAction';

class OneContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleClick(event) {
        if(event) {
            const { oneActions } = this.props;
            oneActions.changeDisplay();
        }
    }

    handleOnChange(event) {
        if(event) {
            console.log(event);
        }
    }

    render() {
        return( <OneView handleOnChange={this.handleOnChange} handleClick={this.handleClick}/>);
    }
}

const mapStateToProps = state => ({
    shouldChange: state.oneState.shouldChange,
    isLoading: state.oneState.isLoading,
});

const mapDispatchToProps = dispatch => ({
    oneActions: bindActionCreators(oneActions, dispatch),
});

OneContainer.propTypes = {
    oneSectionReducer: PropTypes.shape({
        shouldChange: PropTypes.bool,
        isLoading: PropTypes.bool,
    }),
}
export default connect(mapStateToProps, mapDispatchToProps)(OneContainer);