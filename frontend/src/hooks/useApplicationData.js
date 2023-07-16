import React, { useState, useReducer } from "react"

export const useApplicationData = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        const favoritesAfterAdd = [
          ... state,
          action.data
        ];
        return favoritesAfterAdd;
      case "REMOVE_FAVORITE": 
        const favoritesAfterRemove = state.filter(id => id !== action.data);
        return favoritesAfterRemove;
    }
  };

  const [favorites, dispatch] = useReducer(reducer, []);

  const updateToFavPhotoIds = (photoId) => {
    if (!photoId) return;

    if (favorites.includes(photoId)) {
      return dispatch({type: "REMOVE_FAVORITE", data: photoId});
    }

    return dispatch({type: "ADD_FAVORITE", data: photoId});
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