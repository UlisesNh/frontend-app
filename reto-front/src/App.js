import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Header';
import ImageGrid from './ImageGrid';
import ImageCard from './ImageCard';


function App() {
  return (
    <div className="App">
      < Header />
      < ImageGrid />
      < ImageCard /> 
    </div>
  );
}

export default App;
