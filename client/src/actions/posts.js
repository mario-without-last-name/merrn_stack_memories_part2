import {FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => { // this is using redux thunk
  /*
  const action = { type: 'FETCH_ALL', payload: [] }
  dispatch(action);  //Previously:  return action;
  */
  try {
    const { data } = await api.fetchPosts(); // this returns several things, we'll only be keeping the "data"
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) => { // this is using redux thunk
  try {
    const { data } = await api.createPost(post);
    dispatch({type: CREATE, payload:data});
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // console.log(id);
    // console.log(post);
    const { data } = await api.updatePost(id, post);
    dispatch({type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type: DELETE, payload: id});
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}