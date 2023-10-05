// 리덕스를 이용한 숫자 증감 코드
import { createStore } from 'redux';

// const add = document.querySelector('#add');
// const minus = document.querySelector('#minus');
// const num = document.querySelector('#num');

// const ADD = 'ADD';
// const MINUS = 'MINUS';

// 리듀서
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'MINUS':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// store는 데이터를 넣는 곳
// createStore: store 생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log(countStore);

// // subscribe()는 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// });

// add.addEventListener('click', () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener('click', () => {
//   countStore.dispatch({ type: MINUS });
// });

///// ------ 자바스크립트를 이용한 숫자 증감 코드 ------ /////
// const add = document.querySelector('#add');
// const minus = document.querySelector('#minus');
// const num = document.querySelector('#num');

// let count = 0;

// add.addEventListener('click', () => {
//   count++;
//   num.textContent = count;
// });

// minus.addEventListener('click', () => {
//   count--;
//   num.textContent = count;
// });

///// ------ 실습 1 ------ /////
const input = document.querySelector('#input');
const add = document.querySelector('#add');
const ul = document.querySelector('#ul');

// 상수 선언
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

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

add.addEventListener('click', () => {
  // 현재 입력된 값, date를 ADD_TODO 액션으로 dispatch
  todoStore.dispatch({ type: ADD_TODO, text: input.value, id: Date.now() });
  input.value = ''; // 입력창 초기화
});

todoStore.subscribe(() => {
  ul.innerHTML = ''; // ul 초기화
  todoStore.getState().map((todo) => {
    // state 배열 map
    const li = document.createElement('li'); // li 생성
    const btn = document.createElement('button'); // button 생성
    btn.textContent = 'DEL'; // button 텍스트 DEL
    // btn에 이벤트리스너 추가 -> id값(date)을 DELETE_TODO 액션으로 dispatch
    btn.addEventListener('click', () => {
      todoStore.dispatch({ type: DELETE_TODO, id: todo.id });
    });
    li.textContent = todo.text; // li 텍스트는 todo.text
    li.append(btn); // li에 btn 추가
    ul.append(li); // ul에 li 추가
  });
});
