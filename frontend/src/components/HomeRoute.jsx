import React, { useState, useReducer } from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss"

const HomeRoute = (props) => {
  const { photoData, topicData, state, updateToFavPhotoIds, setCurrentTopic, toggleModal } = props

  return (
    <div className="home-route">
      <TopNavigation 
      topicData={topicData} 
      isFavPhotoExist={state.favorites.length} 
      />
      <PhotoList
      photoData={photoData}
      favorites={state.favorites} 
      toggleFavorite={updateToFavPhotoIds}
      />
    </div>
  );
};

export default HomeRoute;