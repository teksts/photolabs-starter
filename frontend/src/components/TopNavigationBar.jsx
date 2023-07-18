import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topicData, setCurrentTopic, isFavPhotoExist } = props;
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
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;