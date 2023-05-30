import {FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE :
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
    // case LIKE: // So this will do the same thing as 'UPDATE'
      return posts.map((post) => post._id === action.payload._id ? action.payload : post); // re-render all posts, but the post whose id is matching the id of the updated post, change that
    case FETCH_ALL:
      /*return posts;*/ return action.payload;
    case CREATE:
      /*return posts;*/ return [...posts, action.payload];
    default:
      return posts;
  }
};