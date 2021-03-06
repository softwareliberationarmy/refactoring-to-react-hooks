import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Selector from '../../common/components/Selector';

const DashboardShell = (props) => {

  const [selectedLabel, setSelectedLabel ] = useState('');

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Selector label='Please select a chart:' 
          options={[
            { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
            { label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`}
          ]} 
          onSelectionChanged={event => setSelectedLabel(event.target.selectedOptions[0].label)} />    
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}

export default DashboardShell;
