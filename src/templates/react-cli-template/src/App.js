import React from 'react';

import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import List from './components/List';

import logo from './assets/logo.png';

const App = () => (
  <>
    <Header logo={logo} />
    <NavigationTabs />
    <List />
  </>
);

export default App;
