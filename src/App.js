import React from 'react';
import { Dogs } from './Dogs';
import { DogsProvider } from './DogsProvider';
import './App.css';

const App = () => {
  return (
    <>
      <h1 className='App-header'>Let us talk dogs</h1>
      <div className="App">
        <DogsProvider>
          <Dogs />
        </DogsProvider>
      </div>
    </>
  );
};

export default App;