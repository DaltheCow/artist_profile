import React, { Component } from 'react';
import ProfilePageContainer from './components/profilePageContainer';
import './App.css';


const App = ({ store }) => {
  return (
    <ProfilePageContainer store={store} />
  );
}

export default App;
