
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
const PhotoListItem = (props) => {
  const {favorites, toggleFavorite, imageSource} = props

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true)
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton 
      isFavorited={favorites.includes(props.id)}
      toggleFavorite={toggleFavorite}
      id={props.id}
      />
      <img className='photo-list__image' src={imageSource} onClick={handleClick}></img>
      {showModal && 
        <PhotoDetailsModal 
        imageSource={imageSource}
        setShowModal={setShowModal}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        />}
      <div className='photo-list__user-details photo-list__user-info'>
        <img className='photo-list__user-profile' src={props.user.profile}></img>
        <div className='photo-list__user-info'>
          {props.user.username}
        </div>
        <div className='photo-list__user-location'>
          {props.location.city}, {props.location.country}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem