import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './components/HomeRoute';

// Note: Rendering a single component to build components in isolation

const App = () => (
  <div className="App">
    {/* Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) */}
    {/* <PhotoList/> */}
    {/* <TopNavigation /> */}
    <HomeRoute />
  </div>
)

export default App