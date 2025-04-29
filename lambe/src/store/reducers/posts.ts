import {Post} from '../../types/Post';
import {ADD_POST} from '../actions/actionTypes';
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
    default:
      return state;
  }
};

export default postReducer;
