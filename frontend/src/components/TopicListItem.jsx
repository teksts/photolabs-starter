import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { setCurrentTopic, id, label } = props;
  const handleClick = () => {
    setCurrentTopic(id)
  }
  return (
    <div className="topic-list__item top-nav-bar" onClick={handleClick}>
      <span>{label}</span>
    </div>
  )
}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem