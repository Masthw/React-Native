import React, { createContext, useReducer } from 'react';
import users from '../data/users';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface UsersState {
  users: User[];
}

// Definição das ações do reducer
type UsersAction =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'EDIT_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number };

const initialState = { users };

const UsersContext = createContext<
  | { state: UsersState; dispatch: React.Dispatch<UsersAction> }
  | undefined
>(undefined);

// Reducer para gerenciar ações
function reducer(state: typeof initialState, action: UsersAction) {
  switch (action.type) {
    case 'ADD_USER':
      return { users: [...state.users, action.payload] };
    case 'EDIT_USER':
      return {
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return { users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
}

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
