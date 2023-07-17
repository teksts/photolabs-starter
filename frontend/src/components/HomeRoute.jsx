import React, { useState, useReducer } from "react";
import { useApplicationData } from "../hooks/useApplicationData";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss"

const HomeRoute = (props) => {
  const applicationData = useApplicationData();
  const { photoData, topicData } = props

  return (
    <div className="home-route">
      <TopNavigation 
      topicData={topicData} 
      isFavPhotoExist={applicationData.state.favorites.length} 
      />
      <PhotoList
      photoData={photoData}
      favorites={applicationData.state.favorites} 
      toggleFavorite={applicationData.updateToFavPhotoIds}
      />
    </div>
  );
};

export default HomeRoute;