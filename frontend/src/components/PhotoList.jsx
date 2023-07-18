import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = (props) => {
  const { photoData, favorites, toggleFavorite, selectPhoto, isModalOpen, closeModal, modalDetails } = props;

  const photoListElements = photoData.map(photo => {
    return (
      <PhotoListItem 
      key={photo.id}
      id={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      user={{ "username": photo.user.username, "profile": photo.user.profile }}
      similarPhotos={photo.similar_photos}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      selectPhoto={selectPhoto}
      closeModal={closeModal}
      />
    );
  });

  
  return (
    <ul className="photo-list">
      {photoListElements}
      {isModalOpen && <PhotoDetailsModal
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      similarPhotos={modalDetails.similarPhotos}
      imageSource={modalDetails.imageSource}
      closeModal={closeModal} 
      />}
    </ul>
  )
}


export default PhotoList;