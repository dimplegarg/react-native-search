import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Navigation from './src';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <Navigation />
    </>
  );
};

export default App;
