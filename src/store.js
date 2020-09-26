import React, { useReducer, useEffect } from 'react';

let reducer = (state, newState) => {
  if (newState === null) {
    // localStorage.removeItem('store');
    return initialState;
  }
  return { ...state, ...newState };
};

const initialState = {
  contactOpen: false
};


const Context = React.createContext();

function StoreProvider(props) {
  const [state, setState] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setState(localStorage.getItem('store'))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('store', JSON.stringify(state));
  // }, [state]);

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, StoreProvider };
