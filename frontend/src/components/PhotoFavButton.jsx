// React
import React from 'react';
// Components
import { FavIcon } from './FavIcon';
// Styling
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isFavorited, toggleFavorite, id } = props

  // Click handler calls state-management callback to add or remove favorite for a photo as appropriate
  const handleClick = () => {
    toggleFavorite(id);
  }; 

  return (
    <div className='photo-list__fav-icon' onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        width={20}
        height={17}
        // Change color of favorite icon based on favorited status
        fill={isFavorited ? "#C80000" : "#EEEEEE"}
        outlineWidth={2}
        stroke={'#C80000'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;