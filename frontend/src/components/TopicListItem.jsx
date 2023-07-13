import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item top-nav-bar">
      <span>{props.label}</span>
    </div>
  )
}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem