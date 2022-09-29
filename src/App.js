import React from 'react';
import './App.css';
import AppBody from './appBody/AppBody';
import AppFooter from './appFooter/AppFooter';
import AppHeader from './appHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;