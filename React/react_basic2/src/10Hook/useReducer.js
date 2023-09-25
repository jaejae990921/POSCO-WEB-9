import { useState, useReducer } from 'react';

// 초기값
const initialState = { count: 0 };

// reducer 함수(상태, 액션)
// 업데이트를 위해 필요한 정보를 담은 액션 값을 받아 새로운 상태를 반환
// 액션에는 type이 존재해야 하며, 그 외의 값들은 임의로 넣어줄 수 있다.
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('error');
  }
}

export default function useReducerComponent() {
  // reducer: state를 업데이트하는 함수
  // state: 현재 상태
  // dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </>
  );
}
