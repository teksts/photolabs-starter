import React, { useState, useReducer } from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

import "../styles/HomeRoute.scss"

const HomeRoute = (props) => {
  const { photoData, topicData, state, updateToFavPhotoIds, setCurrentTopic, selectPhoto, closeModal } = props

  return (
    <div className="home-route">
      <TopNavigation 
      topicData={topicData}
      setCurrentTopic={setCurrentTopic}
      isFavPhotoExist={state.favorites.length} 
      />
      <PhotoList
      photoData={photoData}
      favorites={state.favorites}
      isModalOpen={state.imageModal.isOpen}
      modalDetails={state.imageModal.imageDetails}
      toggleFavorite={updateToFavPhotoIds}
      selectPhoto={selectPhoto}
      closeModal={closeModal}
      />
    </div>
  );
};

export default HomeRoute;