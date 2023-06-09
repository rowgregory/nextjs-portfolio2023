'use client';

import { createContext, useReducer, useContext } from 'react';

const initialState = {};

export const UserContext = createContext({
  user: {},
  login: () => {},
  logout: () => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = user => dispatch({ type: 'LOGIN', payload: user });

  return (
    <UserContext.Provider value={{ user: state.user, login }} {...props} />
  );
};

export const useUserContext = () => useContext(UserContext);
