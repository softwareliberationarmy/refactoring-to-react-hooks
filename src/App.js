import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataContext from './context/DataContext';

const initialState = {
  loading: true,
  error: "",
  salesTotal: 0,
  subscriptionsTotal: 0,
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

const App = () => {  
  return (
    <DataContext.Provider value={initialState}>
      <DashboardShell />
    </DataContext.Provider>
  );
};

export default App;
