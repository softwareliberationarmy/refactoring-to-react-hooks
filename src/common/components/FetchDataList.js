import React from 'react';
import PropTypes from 'prop-types';
import {useFetch } from '../../hooks/useFetch';

const FetchDataList = props => {

    const data = useFetch(props.fetchUrl);

    return (
        <div>
            <ul>
                {data && data.map((d,i) => (<li key={i}>{props.mapResults(d)}</li>))}
            </ul>
        </div>
    );
};

FetchDataList.propTypes = {
    fetchUrl: PropTypes.string.isRequired,
    mapResults: PropTypes.func.isRequired
};

export default FetchDataList;