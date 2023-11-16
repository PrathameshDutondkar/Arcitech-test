
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
        
      </div>
    </Provider>
  );
};

export default App;
