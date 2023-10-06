import { createStore } from 'redux';

// 상수 선언
export const ADD = 'ADD';
export const DELETE = 'DELETE';

const item = [
  {
    id: 1,
    name: '아이템1',
    price: 1000,
  },
  {
    id: 2,
    name: '아이템2',
    price: 2000,
  },
  {
    id: 3,
    name: '아이템3',
    price: 3000,
  },
];

const init = {
  item: item,
  cart: [],
};

// 리듀서
const itemReducer = (state = init, action) => {
  // state는 text, id를 가진 객체를 담은 배열
  switch (action.type) {
    case ADD:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.id,
            name: action.name,
            price: action.price,
          },
        ],
      };
    case DELETE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

// store 생성
const itemStore = createStore(itemReducer);

export default itemStore;
