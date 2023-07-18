// Global variable listing valid user action types
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

// The initial global state: no favorites, no topic filter, no open modal
const initialState = {
  favorites: [],
  currentTopic: '',
  imageModal: {
    isOpen: false,
    imageDetails: {
      id: 0,
      similarPhotos: [],
      imageSource: '',
    }
  }
}

// Reducer manages all global state changes according to action type
const reducer = (state, action) => {
  switch (action.type) {
    // Add a favorite
    case ACTIONS.FAV_PHOTO_ADDED:
      const favoritesAfterAdd = {
        ... state,
        favorites: [
          ... state.favorites,
          action.data
        ]
      };
      return favoritesAfterAdd;

    // Remove a favorite
    case ACTIONS.FAV_PHOTO_REMOVED: 
      const favoritesAfterRemove = {
        ... state, 
        favorites: state.favorites.filter(id => id !== action.data)
      };
      return favoritesAfterRemove;

    // Set topic filter
    case ACTIONS.SET_TOPIC_DATA:
      const topicAfterUpdate = {
        ... state,
        currentTopic: action.data
      };
      return topicAfterUpdate;
    
    // Open a modal for a photo
    case ACTIONS.SELECT_PHOTO:
      const selectedPhoto = {
        ... state,
        imageModal: {
          ... state.imageModal,
          isOpen: true,
          imageDetails: action.data,
        }
      }
      return selectedPhoto;
    
    // Close an open modal
    case ACTIONS.CLOSE_MODAL:
      const modalAfterClose = {
        ... state,
        imageModal: {
          ... state.imageModal,
          isOpen: false
        }
      };
      return modalAfterClose;
  }
};

export { ACTIONS, initialState, reducer }