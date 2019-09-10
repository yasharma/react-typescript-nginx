import React, { createContext, useReducer } from 'react';
import { IAction } from '../Entities/IAction';

const initialState = {};

export const Store = createContext(initialState);


/**
 * reducer function - a pure function 
 * which takes current state and action object as params and 
 * returns the new state after doing calculations on current state based on the action received.
 * 
 * @param state initial state object to initilize the store
 * @param action interface for the store actions
 */
const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}