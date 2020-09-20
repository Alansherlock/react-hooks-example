import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};
export default () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return <div>
    Your count: {count}
    <button onClick={() => {
      dispatch({type:'add'})
    }}>add</button>
    <button onClick={() => {
      dispatch({ type: 'sub' })
    }}>sub</button>
  </div>
}