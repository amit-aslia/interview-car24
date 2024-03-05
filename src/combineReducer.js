import { combineReducers } from 'redux';
import postsReducer from '../src/reducer/paginationSlice';
import paginatedPostsReducer from '../src/reducer/paginatedPostSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  paginatedPosts: paginatedPostsReducer,
});

export default rootReducer;
