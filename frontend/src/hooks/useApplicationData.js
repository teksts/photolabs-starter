import React, { useState, useReducer } from "react"

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  favorites: [],
  currentTopic: '',
  isModalOpen: false,
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
    
    case ACTIONS.TOGGLE_MODAL:
      const modalAfterToggle = {
        ... state,
        isModalOpen: !state.isModalOpen
      }
      return modalAfterToggle;
  }
};

export { ACTIONS, initialState, reducer }