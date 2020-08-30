import React from 'react';
import './stylesheet.css';

/**
 * Header View component of LoggedIn Page
 * @param originalsData
 * @param img_base_url
 */
const HeaderView = ({ originalsData = [], img_base_url }) => {
    const displayData = originalsData[Math.floor(Math.random() * originalsData.length - 1)];
    return (
        <header className="header-container" style={{ backgroundImage: `url(${img_base_url}${displayData.backdrop_path})` }}>
            <div className="header-contents">
                <h1 className="header-content-title">{displayData.original_name}</h1>
                <div className="header-content-buttons">
                    <button className="header-content-button">Play</button>
                    <button className="header-content-button">My List</button>
                </div>
                <h1 className="header-content-description">{displayData.overview}</h1>
            </div>
        </header>
    )
}

export default HeaderView;