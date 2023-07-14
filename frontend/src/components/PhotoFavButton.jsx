import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isFavorited, toggleFavorite, id } = props
  const handleClick = () => {
    toggleFavorite(id);
  }; 

  return (
    <div className='photo-list__fav-icon' onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        width={20}
        height={17}
        fill={isFavorited ? "#C80000" : "#EEEEEE"}
        outlineWidth={2}
        stroke={'#C80000'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;