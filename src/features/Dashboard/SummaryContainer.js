import React, { useContext } from "react";
import DataContext from '../../context/DataContext';

const SummaryContainer = () => {
  const context = useContext(DataContext);

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {context.salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {context.subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
