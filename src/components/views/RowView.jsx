import React from 'react';
import './stylesheet.css';

/**
 * Component returning movies list
 * @param data
 * @param index
 * @param rowTitle
 */
const RowView = ({ data = [], index, rowTitle, img_base_url }) => {
    return (
        <div className="row-container">
            <h2>{rowTitle}</h2>
            <div className="poster-container">
                {data.results.map((tile) => (
                    <img className={`poster ${index === 0 && "large-poster"}`}
                        src={`${img_base_url}${index === 0 ? tile.poster_path : tile.backdrop_path}`} alt={tile.title}
                    />
                ))}
            </div>
        </div >
    )
};

export default RowView;