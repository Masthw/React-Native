import { User } from '../../types/User';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from './actionTypes';

export const login = (user: User) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    };
};

