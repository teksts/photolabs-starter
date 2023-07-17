import React, { useState, useReducer } from "react";
import { useApplicationData } from "../hooks/useApplicationData";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss"

const HomeRoute = (props) => {
  const applicationData = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={applicationData.state.favorites.length} />
      <PhotoList favorites={applicationData.state.favorites} toggleFavorite={applicationData.updateToFavPhotoIds}/>
    </div>
  );
};

export default HomeRoute;