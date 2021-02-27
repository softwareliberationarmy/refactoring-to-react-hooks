import React from 'react';
import Selector from '../../common/components/Selector';
import RawDataList from './RawDataList';

const rawDataShell = (props) => {
    const optionsForSelect = [
        { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
        { label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`}
      ];

      return (
    <div style={{ margin: "1rem"}}>
        <Selector label='Please, select a chart' options={optionsForSelect}/>    
        <RawDataList />
    </div>
    );

};

export default rawDataShell;