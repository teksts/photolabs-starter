import React, { useState, useEffect, useReducer } from 'react';

import { ACTIONS, initialState, reducer } from "./hooks/useApplicationData";

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './components/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (!photoId) return;

    if (state.favorites.includes(photoId)) {
      return dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, data: photoId});
    }

    return dispatch({type: ACTIONS.FAV_PHOTO_ADDED, data: photoId});
  };

  const setCurrentTopic = (topicId) => {
    return dispatch({type: ACTIONS.SET_TOPIC_DATA, data: topicId})
  }

  const toggleModal = () => {
    return dispatch({type: ACTIONS.TOGGLE_MODAL});
  };


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
      state={state}
      updateToFavPhotoIds={updateToFavPhotoIds}
      setCurrentTopic={setCurrentTopic}
      toggleModal={toggleModal} 
      />
    </div>
  );
};

export default App