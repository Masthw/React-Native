import {Post, Comment} from '../../types/Post';
import {ADD_POST, ADD_COMMENT} from './actionTypes';
import axios from 'axios';
import {AppDispatch} from '../storeConfig';

export const addPost = (post: Post) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post('posts.json', post);
      dispatch({
        type: ADD_POST,
        payload: {
          ...post,
          id: response.data.name,
        },
      });
    } catch (err) {
      console.error('Erro ao salvar post:', err);
    }
  };
};

export const addComment = (postId: string, comment: Comment) => {
  return {
    type: ADD_COMMENT,
    payload: {postId, comment},
  };
};
