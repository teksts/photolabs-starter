// React
import React from 'react';
// Components
import FavIcon from './FavIcon';
// Stling
import '../styles/FavBadge.scss';

export const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* Adjust presentation of the favorite badge depending on whether there is at least one favorited photo */}
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;