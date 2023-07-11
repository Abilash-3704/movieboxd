import React, {createContext, useReducer} from 'react';

const initialstate = {
  movie: '',
};

export const GlobalContext = createContext(initialstate);

const reducer = (state, action) => {
  switch (action.type) {
    case 'movie':
      return {
        movie: action.movie,
      };
  }
};

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const setMovie = movie => {
    dispatch({type: 'movie', movie: movie});
  };
  return (
    <GlobalContext.Provider
      value={{
        movie: state.movie,
        setMovie,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
