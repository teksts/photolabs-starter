import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const { id, closeModal, favorites, toggleFavorite, imageSource, similarPhotos } = props;

  const handleClick = () => {
    closeModal();
  };
  
  return (
    <div className='photo-details-modal'>
      <header className='photo-details-modal__top-bar'>
        <button className='photo-details-modal--close-button' onClick={handleClick}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </header>
      <PhotoFavButton 
      isFavorited={favorites.includes(id)}
      toggleFavorite={toggleFavorite}
      id={id}
      />
      <div className='photo-details-modal__image'>
        <img src={imageSource}></img>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList 
        photoData={similarPhotos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  )
}

export default PhotoDetailsModal;