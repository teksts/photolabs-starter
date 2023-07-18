
// React
import React from 'react';
// Components
import PhotoFavButton from './PhotoFavButton';
// Styling
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, favorites, toggleFavorite, imageSource, selectPhoto, similarPhotos } = props
  
  // Click handler loads photo info into modal property of global state and toggles modal display boolean, opening modal  
  const handleClick = () => {
    const photoDetails = {
      id,
      similarPhotos,
      imageSource
    }
    selectPhoto(photoDetails);
  };

  return (
    <div className='photo-list__item'>
      {/* Photo fav button affects favorite state */}
      <PhotoFavButton 
      isFavorited={favorites.includes(id)}
      toggleFavorite={toggleFavorite}
      id={id}
      />
      <img className='photo-list__image' src={imageSource} onClick={handleClick}></img>
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