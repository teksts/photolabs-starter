// Hooks
import React, { useState, useEffect, useReducer } from 'react';
import { ACTIONS, initialState, reducer } from "./hooks/useApplicationData";
// Components
import HomeRoute from './components/HomeRoute';
// Helpers
import { fetchData } from './helpers/fetchData';
// Styling
import './App.scss';

const App = () => {
  // All user interaction state is managed globally through reducer and state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Manage favorites
  const updateToFavPhotoIds = (photoId) => {
    if (!photoId) return;

    if (state.favorites.includes(photoId)) {
      return dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, data: photoId});
    }

    return dispatch({type: ACTIONS.FAV_PHOTO_ADDED, data: photoId});
  };

  // Filter photos by topic, or reset topic filter
  const setCurrentTopic = (topicId) => {
    if (!topicId) {
      return dispatch({type: ACTIONS.SET_TOPIC_DATA, data: ""});
    }
    return dispatch({type: ACTIONS.SET_TOPIC_DATA, data: topicId});
  }

  // Open a photo modal
  const selectPhoto = (photoDetails) => {
    return dispatch({type: ACTIONS.SELECT_PHOTO, data: photoDetails})
  }

  // Close a photo modal
  const closeModal = () => {
    return dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  // Each type of data loaded from the API is managed in distinct state
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  
  // Call a fetch helper to make the correct API call based on whether photos are being filtered by topic, and update if filter status changes
  useEffect(() => {
    fetchData(state.currentTopic)
      .then((res) => {
        setPhotos(res.photoData);
        setTopics(res.topicData);
      });
  }, [state.currentTopic])

  return (
    <div className="App">
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