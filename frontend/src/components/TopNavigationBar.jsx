import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topicData, setCurrentTopic, isFavPhotoExist } = props;
  
  // Click handler allows users to return to full photo list view by clearing topic set in state when clicking logo
  const handleClick = () => {
    setCurrentTopic();
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>PhotoLabs</span>
      <TopicList 
      topicData={topicData} 
      setCurrentTopic={setCurrentTopic}
      />
      {/* Favorite badge shows notification if photos have been liked */}
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;