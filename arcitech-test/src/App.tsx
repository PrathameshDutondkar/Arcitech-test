// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataLoader from './components/DataLoader';
import CategoryDistributionChart from './components/CategoryDistributionChart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <DataLoader />
        <h1>Category Distribution Chart</h1>
        <CategoryDistributionChart />
        {/* Add other chart components here */}
      </div>
    </Provider>
  );
};

export default App;
