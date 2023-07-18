import React, { useState, useReducer } from "react"

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  favorites: [],
  currentTopic: '',
  imageModal: {
    isOpen: false,
    imageDetails: {
      similarPhotos: [],
      imageSource: '',
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const favoritesAfterAdd = {
        ... state,
        favorites: [
          ... state.favorites,
          action.data
        ]
      };
      return favoritesAfterAdd;

    case ACTIONS.FAV_PHOTO_REMOVED: 
      const favoritesAfterRemove = {
        ... state, 
        favorites: state.favorites.filter(id => id !== action.data)
      };
      return favoritesAfterRemove;

    case ACTIONS.SET_TOPIC_DATA:
      const topicAfterUpdate = {
        ... state,
        currentTopic: action.data
      };
      return topicAfterUpdate;
    
    case ACTIONS.SELECT_PHOTO:
      const selectedPhoto = {
        ... state,
        imageModal: {
          ... state.imageModal,
          isOpen: true,
          imageDetails: action.data,
        }
      }
      return selectedPhoto;
    
    case ACTIONS.CLOSE_MODAL:
      const modalAfterClose = {
        ... state,
        imageModal: {
          ... state.imageModal,
          isOpen: false
        }
      };
      return modalAfterClose;
  }
};

export { ACTIONS, initialState, reducer }