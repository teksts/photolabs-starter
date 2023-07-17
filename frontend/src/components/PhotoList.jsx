import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photoData, favorites, toggleFavorite } = props;

  const photoListElements = photoData.map(photo => {
    return (
      <PhotoListItem 
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      user={{ "username": photo.user.username, "profile": photo.user.profile }}
      favorites={favorites}
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