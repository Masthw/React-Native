import {User} from '../../types/User';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes';

interface Action {
  type: string;
  payload?: User;
}

const initialState: User = {
  name: null,
  email: null,
  token: null,
};

const reducer = (state = initialState, action: Action): User => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload?.name ?? null,
        email: action.payload?.email ?? null,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
      };
    default:
      return state;
  }
};

export default reducer;
