
import React, { useReducer } from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {isFavorited, toggleFavorite} = props

  return (
    <div className='photo-list__item'>
      <PhotoFavButton 
      isFavorited={isFavorited}
      toggleFavorite={toggleFavorite}
      id={props.id}
      />
      <img className='photo-list__image' src={props.imageSource}></img>
      {/* <div className='photo-list__user-details photo-list__user-info'>
        <div className='photo-list__user-info'>
          {props.username}
        </div>
        <div className='photo-list__user-location'>
          {props.location.city}, {props.location.country}
        </div>
      </div> */}
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem