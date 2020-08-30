import React from 'react';
import { requests } from '../../helpers/utilities';
import ApplicationBarView from './ApplicationBarView'
import HeaderView from './HeaderView';
import RowView from './RowView';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const AddingRowsView = ({ details = [] }) => {
    const requestsList = Object.entries(requests);
    const img_base_url = 'https://image.tmdb.org/t/p/original';
    let headerContent = details.length > 0 ? <HeaderView originalsData={details[0].results} img_base_url={img_base_url} /> : '';
    return (
        <div className="container">
            <ApplicationBarView />
            {headerContent}
            {details.length > 0 ? details.map((item, index) => {
                return (<RowView data={item} index={index} rowTitle={requestsList[index][0]} img_base_url={img_base_url} />)
            }) : ''}
        </div>
    )
}

export default AddingRowsView;