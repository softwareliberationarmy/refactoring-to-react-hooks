import React, { useContext } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import DataContext from '../../context/DataContext';

const ChartContainer = ({ selectedLabel }) => {

  const context = useContext(DataContext);
  const chartLabels = context.data.map(dataPoint => dataPoint.timestamp);
  const chartValues = context.data.map(dataPoint => dataPoint.amount);

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

ChartContainer.propTypes = {
  dataset: PropTypes.array.isRequired,
  selectedLabel: PropTypes.string.isRequired
};

export default ChartContainer;
