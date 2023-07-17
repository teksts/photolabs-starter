import React, { useState, useEffect } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './components/HomeRoute';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  
  useEffect(() => {
    // refactor later to live in separate file, accept paths as parameters
    const fetchData = async () => {
      const photosRes = await fetch('http://localhost:8001/api/photos');
      const topicsRes = await fetch('http://localhost:8001/api/topics');
      const photoData = await photosRes.json()
      const topicData = await topicsRes.json()
      const allData = {
        photoData,
        topicData
      }
      return allData;
      };
    fetchData()
      .then((res) => {
        setPhotos(res.photoData);
        setTopics(res.topicData);
      });
  }, [])

  return (
    <div className="App">
      {/* Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) */}
      {/* <PhotoList/> */}
      {/* <TopNavigation /> */}
      <HomeRoute 
      photoData={photos} 
      topicData={topics} 
      />
    </div>
  );
};

export default App