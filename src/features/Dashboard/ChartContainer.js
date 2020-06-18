import React from "react";
import LineChart from "./LineChart";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ChartContainer = ({ dataset, selectedLabel }) => {
  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp);
  const chartValues = dataset.map(dataPoint => dataPoint.amount);

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { dataset: state.dataset.data };
};

ChartContainer.propTypes = {
  dataset: PropTypes.array.isRequired,
  selectedLabel: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(ChartContainer);
