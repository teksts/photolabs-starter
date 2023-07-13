import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';

// Note: Rendering a single component to build components in isolation

const App = () => (
  <div className="App">
    {/* Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) */}
    <PhotoList/>
  </div>
)

export default App