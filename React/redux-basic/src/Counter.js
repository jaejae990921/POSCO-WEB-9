import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/counter';

export default function Counter() {
  const counter = useSelector((state) => state.counte.counter);

  const dispatch = useDispatch();

  const add = () => {
    // index.js에서 export한 counterActions를 사용 -> counterSlice reducer의 increment() 실행
    dispatch(counterActions.increment());
  };

  const minus = () => {
    // index.js에서 export한 counterActions를 사용 -> counterSlice reducer의 decrement() 실행
    dispatch(counterActions.decrement());
  };

  const calc = () => {
    dispatch(counterActions.calc({ plus: 5, minus: -3 }));
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={calc}>CALC</button>
    </>
  );
}
