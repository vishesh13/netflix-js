import React from 'react';
import './stylesheet.css';

const OneView = ({ handleClick, handleOnChange }) => {
    return (
        <div className="content-container">
        <input type="text" onChange={handleOnChange} />
        <button type="submit" onClick={handleClick}/>
        </div>

    );
}

export default OneView;