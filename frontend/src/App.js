import React from 'react';
import Login from './components/Login';
import Payment from './components/Payment';
import Export from './components/Export';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskFlow</h1>
        <Login />
        <Payment />
        <Export />
      </header>
    </div>
  );
}

export default App;
