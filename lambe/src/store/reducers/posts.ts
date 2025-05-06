import {Post} from '../../types/Post';
import {ADD_POST, ADD_COMMENT} from '../actions/actionTypes';
import fence from '../../../assets/imgs/fence.jpg';
import boat from '../../../assets/imgs/boat.jpg';

const initialState: Post[] = [
  {
    id: '1',
    nickname: 'Lucas',
    email: 'lucas@email.com',
    image: fence,
    comments: [
      {nickname: 'Maria', comment: 'Muito bom!'},
      {nickname: 'José', comment: 'Top demais'},
    ],
  },
  {
    id: '2',
    nickname: 'Maria',
    email: 'maria@email.com',
    image: boat,
    comments: [],
  },
];

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case ADD_COMMENT:
      const {postId, comment} = action.payload;
      return state.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;
