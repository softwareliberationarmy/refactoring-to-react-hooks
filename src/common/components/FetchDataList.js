import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FetchDataList = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(props.fetchUrl !== ''){
            fetch(props.fetchUrl)
            .then(response => {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(json => setData(json));
        }
    }, [props.fetchUrl]);

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