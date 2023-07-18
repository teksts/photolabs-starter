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
    if (!topicId) {
      return dispatch({type: ACTIONS.SET_TOPIC_DATA, data: ""});
    }
    return dispatch({type: ACTIONS.SET_TOPIC_DATA, data: topicId});
  }

  const selectPhoto = (photoDetails) => {
    return dispatch({type: ACTIONS.SELECT_PHOTO, data: photoDetails})
  }

  const closeModal = () => {
    return dispatch({type: ACTIONS.CLOSE_MODAL});
  };


  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  
  useEffect(() => {
    // refactor later to live in separate file, accept paths as parameters
    const fetchData = async () => {
      const topicQuery = state.currentTopic
      let photoRes = await fetch('http://localhost:8001/api/photos');
      if (topicQuery) {
        photoRes = await fetch(`http://localhost:8001/api/topics/photos/${topicQuery}`)
      }
      const topicRes = await fetch('http://localhost:8001/api/topics');
      const photoData = await photoRes.json()
      const topicData = await topicRes.json()
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
  }, [state.currentTopic])

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
      selectPhoto={selectPhoto}
      closeModal={closeModal} 
      />
    </div>
  );
};

export default App