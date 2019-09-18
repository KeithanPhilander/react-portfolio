import React from 'react';
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom';
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
