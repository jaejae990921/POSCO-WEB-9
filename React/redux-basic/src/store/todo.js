import { createStore } from 'redux';

// 상수 선언
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// 리듀서
const todoReducer = (state = [], action) => {
  // state는 text, id를 가진 객체를 담은 배열
  switch (action.type) {
    case ADD_TODO:
      // 텍스트, id 추가, 원래 state spread
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      // id가 같지 않은 것만 필터링
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// store 생성
const todoStore = createStore(todoReducer);

export default todoStore;
