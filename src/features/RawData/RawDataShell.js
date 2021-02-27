import React, {useState} from 'react';
import Selector from '../../common/components/Selector';
import RawDataList from './RawDataList';

const RawDataShell = () => {    
      const [chartDataUrl, setChartDataUrl] = useState('');

      return (
    <div style={{ margin: "1rem"}}>
        <Selector label='Please, select a chart' 
            options={chartDataTypes} 
            onSelectionChanged={(event) => setChartDataUrl(event.target.selectedOptions[0].value)} />    

        <RawDataList fetchUrl={chartDataUrl} />
    </div>
    );

};

const chartDataTypes = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    { label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`}
  ];

export default RawDataShell;