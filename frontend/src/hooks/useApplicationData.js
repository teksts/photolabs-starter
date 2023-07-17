import React, { useState, useReducer } from "react"

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export const useApplicationData = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        const favoritesAfterAdd = [
          ... state,
          action.data
        ];
        return favoritesAfterAdd;
      case ACTIONS.FAV_PHOTO_REMOVED: 
        const favoritesAfterRemove = state.filter(id => id !== action.data);
        return favoritesAfterRemove;
    }
  };

  const [favorites, dispatch] = useReducer(reducer, []);

  const updateToFavPhotoIds = (photoId) => {
    if (!photoId) return;

    if (favorites.includes(photoId)) {
      return dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, data: photoId});
    }

    return dispatch({type: ACTIONS.FAV_PHOTO_ADDED, data: photoId});
  };


  const [isModalOpen, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true)
  };

  const appData = {
    state: {
      favorites: favorites,
      isModalOpen: isModalOpen
    } ,
    updateToFavPhotoIds: updateToFavPhotoIds,
    toggleModal: toggleModal
  }
  return appData
}