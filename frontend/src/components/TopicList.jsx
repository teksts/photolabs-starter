import React from 'react';

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topicData } = props;

  const topicListElements = topicData.map(topic => {
    return (
      <TopicListItem
      key={topic.id}
      id={topic.id}
      slug={topic.slug}
      label={topic.title}
      />
    );
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicListElements}
    </div>
  );
}

export default TopicList