import {Post} from '../../types/Post';
import {ADD_POST} from './actionTypes';

export const addPost = (post: Post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
