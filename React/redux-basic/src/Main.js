import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, DELETE_TODO } from './store/todo';
import { ADD, DELETE } from './store/cart';

export default function Main() {
  //   const [text, setText] = useState('');

  //   // useSelect() : 리덕스 store의 state를 조회
  //   // 인자로 콜백함수, 콜백함수의 매개변수로 state를 받음
  //   // 자동으로 subscribe()를 호출하여 state가 바뀔 때마다 렌더링
  //   const todos = useSelector((state) => state);

  //   // dispatch는 우리가 호출 할 수 있는 함수
  //   const dispatch = useDispatch();

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch({ type: ADD_TODO, text: text, id: Date.now() });
  //     setText('');
  //   };

  //   const onClick = (id) => {
  //     dispatch({ type: DELETE_TODO, id });
  //   };

  //   return (
  //     <div>
  //       <h1>To Dos</h1>
  //       <form onSubmit={onSubmit}>
  //         <input value={text} onChange={(e) => setText(e.target.value)} />
  //         <button>Add</button>
  //       </form>
  //       <ul>
  //         {todos.map((todo) => (
  //           <li key={todo.id} id={todo.id}>
  //             {todo.text}
  //             <button onClick={() => onClick(todo.id)}>삭제</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  const itemArr = useSelector((state) => state.item);
  const cartArr = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalSum = () => {
    let sum = 0;
    cartArr.map((item) => {
      sum += item.price;
    });
    return sum;
  };

  return (
    <div>
      <h1>상품</h1>
      <div>
        {itemArr.map((item) => (
          <div>
            {item.name} : {item.price}
            <button
              onClick={() =>
                dispatch({
                  type: ADD,
                  id: Date.now(),
                  name: item.name,
                  price: item.price,
                })
              }
            >
              장바구니 담기
            </button>
          </div>
        ))}
      </div>
      <h1>장바구니</h1>
      <div>총액: {totalSum()}원</div>
      <div>
        {cartArr.map((item, setSum) => (
          <div>
            {item.name} : {item.price}
            <button
              onClick={() =>
                dispatch({
                  type: DELETE,
                  id: item.id,
                  name: item.name,
                  price: item.price,
                })
              }
            >
              장바구니 삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
