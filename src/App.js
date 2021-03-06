import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataContext from './context/DataContext';

const initialState = {
  loading: true,
  error: "",
  salesTotal: 500,
  subscriptionsTotal: 500,
  data: [{ timestamp: new Date().toISOString(), amount: 100 },
    { timestamp: new Date().toISOString(), amount: 200 },
    { timestamp: new Date().toISOString(), amount: 300 }]
};

const App = () => {  
  return (
    <DataContext.Provider value={initialState}>
      <DashboardShell />
    </DataContext.Provider>
  );
};

export default App;
