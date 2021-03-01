import React from 'react';
import PropTypes from 'prop-types';
import {useFetch } from '../../hooks/useFetch';
import Loading  from '../components/Loading';

const FetchDataList = props => {

    const {loading, data, error} = useFetch(props.fetchUrl);

    console.log('kp-error', error);

    if(loading) return (<Loading/>);
    else if (error) return (<div>{error.message}</div>);
    else 
    return (
        <div>
            {data && (<ul>{data && data.map((d,i) => (<li key={i}>{props.mapResults(d)}</li>))}</ul>)}                        
        </div>
    );
};

FetchDataList.propTypes = {
    fetchUrl: PropTypes.string.isRequired,
    mapResults: PropTypes.func.isRequired
};

export default FetchDataList;