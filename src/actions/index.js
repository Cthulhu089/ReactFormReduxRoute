export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY =  '?key=marco089'

import axios from 'axios';

export let fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export let createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
      .then(() => callback());

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export let fetchPost = (values) => {
  const request = axios.get(`${ROOT_URL}/posts/${values}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export let deletePost = (value, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${value}${API_KEY}`)
      .then(() => callback());

  return {
    type: DELETE_POST,
    payload: request
  }
}
