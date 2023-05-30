import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({ posts }); // same as    posts: posts; })