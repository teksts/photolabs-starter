// React
import React from 'react';
// Styling
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { setCurrentTopic, id, label } = props;

  // Click handler calls state-management callback, setting a new value for the currentTopic state, which triggers a new API call and updates the photos shown to match given topic
  const handleClick = () => {
    setCurrentTopic(id)
  }
  return (
    <div className="topic-list__item top-nav-bar" onClick={handleClick}>
      <span>{label}</span>
    </div>
  )
}

export default TopicListItem