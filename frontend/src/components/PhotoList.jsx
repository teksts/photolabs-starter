import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

import photoData from "../mocks/photos"

const PhotoList = (props) => {
  const {favorites, toggleFavorite} = props;

  const photoListElements = photoData.map(photo => {
    return (
      <PhotoListItem 
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      user={{ "username": photo.user.username, "profile": photo.user.profile }}
      isFavorited={favorites.includes(photo.id)}
      toggleFavorite={toggleFavorite}
      />
    );
  });

  
  return (
    <ul className="photo-list">
      {photoListElements}
    </ul>
  )
}


export default PhotoList;