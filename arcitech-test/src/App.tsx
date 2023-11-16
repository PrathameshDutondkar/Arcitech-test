
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataLoader from './components/DataLoader';
import CategoryDistributionChart from './components/CategoryDistributionChart';
import ResponseTimesChart from './components/ResponseTimesChart';
import UserSatisfactionChart from './components/UserSatisfactionChart ';
import PlatformDistributionChart from './components/PlatformDistributionChart ';
import CountryDistributionChart from './components/CountryDistributionChart';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <DataLoader />
        <CategoryDistributionChart />
        <ResponseTimesChart></ResponseTimesChart>
        <UserSatisfactionChart></UserSatisfactionChart>
        <PlatformDistributionChart></PlatformDistributionChart>
        <CountryDistributionChart></CountryDistributionChart>
        
      </div>
    </Provider>
  );
};

export default App;
