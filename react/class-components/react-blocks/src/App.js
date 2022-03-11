import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontents';
import Advertisement from './components/Advertisements';
import { findByLabelText } from '@testing-library/react';

const divStyle = {
  backgroundColor: '#dddddd',
  border: '2px black solid',
  height: '500px',
  padding: '10px',
  margin: '10px',
  width: '700px',
  textAlign: 'center'
}

const containerStyle = {
  height: '100%',
  width: '100%',
  display: 'flex'
}

function App() {
  return (
    <div style={divStyle} className="app">
      <Header />
      <div style={containerStyle}>
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

