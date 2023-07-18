export const fetchData = async (queryParams) => {
  const topicQuery = queryParams;
  let photoRes;
  // If a topic has been clicked, the currentTopic state will change triggering rerender, and the topic id will be passed here to complete corresponding API call
  if (topicQuery) {
    photoRes = await fetch(`http://localhost:8001/api/topics/photos/${topicQuery}`);
  // Otherwise, the full photo list is rendered
  } else {
    photoRes = await fetch('http://localhost:8001/api/photos');
  }
  const topicRes = await fetch('http://localhost:8001/api/topics');
  const photoData = await photoRes.json()
  const topicData = await topicRes.json()
  const allData = {
    photoData,
    topicData
  }
  return allData;
  };