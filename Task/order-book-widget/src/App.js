import React from 'react';
import './App.scss';
import OrderBook from './components/OrderBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Book</h1>
        <OrderBook />
      </header>
    </div>
  );                                                                      
}

export default App;
