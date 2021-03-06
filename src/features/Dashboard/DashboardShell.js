import React, { Component } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Selector from '../../common/components/Selector';

class DashboardShell extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedLabel: "" };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const selectedLabel = event.target.selectedOptions[0].label;
    this.setState({ selectedLabel });
  }

  buildSelect() {
    const optionsForSelect = [
      { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
      {
        label: "Subscriptions",
        value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
      }
    ];

    return (
      <Selector label='Please select a chart:' 
      options={optionsForSelect} 
      onSelectionChanged={this.handleSelectChange} />    
    );
  }

  render() {
    return (
      <Layout>
        <Aside>
          <h2># Polly dashboard</h2>
          {this.buildSelect()}
        </Aside>
        <Main>
          <h1>
            Welcome, <span className="bold">learner!</span>
          </h1>
          <SummaryContainer />
          <ChartContainer selectedLabel={this.state.selectedLabel} />
        </Main>
      </Layout>
    );
  }
}

export default DashboardShell;
