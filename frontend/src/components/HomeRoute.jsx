import React, { useState, useReducer } from "react";
import { useApplicationData } from "../hooks/useApplicationData";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss"

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

const HomeRoute = (props) => {
  const applicationData = useApplicationData();

  const [state, dispatch] = useReducer(reducer, []);

  const toggleFavorite = (photoId) => {
    if (!photoId) return;

    if (state.includes(photoId)) {
      return dispatch({type: "REMOVE_FAVORITE", data: photoId});
    }

    return dispatch({type: "ADD_FAVORITE", data: photoId});
  };

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={applicationData.state.favorites.length} />
      <PhotoList favorites={applicationData.state.favorites} toggleFavorite={applicationData.updateToFavPhotoIds}/>
    </div>
  );
};

export default HomeRoute;