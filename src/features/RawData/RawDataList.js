import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const loadMockData = () => import('../../mocks');
if (process.env.NODE_ENV === "development") {
    loadMockData();
}

const RawDataList = props => {
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
                {data && data.map((d,i) => (<li key={i}>{d.timestamp} - {d.amount}</li>))}
            </ul>
        </div>
    );
};

RawDataList.propTypes = {
    fetchUrl: PropTypes.string.isRequired
};

export default RawDataList;