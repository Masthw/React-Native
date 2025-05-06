import {Post, Comment} from '../../types/Post';
import {ADD_POST, ADD_COMMENT} from './actionTypes';

export const addPost = (post: Post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const addComment = (postId: string, comment: Comment) => {
  return {
    type: ADD_COMMENT,
    payload: {postId, comment},
  };
};
