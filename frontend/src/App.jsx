import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const photos = new Array(3)
photos.fill(<PhotoListItem/>)

const App = () => (
  <div className="App">
    {photos}
  </div>
)

export default App