import { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  // console.log('Child Component');
  return (
    <>
      <button onClick={onClick}>PLUS</button>
    </>
  );
}

// useMemo나 useCallback은 개발 맨처음부터 사용하는 것이 아니라
// 보통은 개발이 다 끝난 이후에 성능 최적화를 위해 사용한다.
// useMemo와 useCallback은 결국엔 결과와 함수를 어디에 저장을 해야하는 것 이기때문에
// 오히려 계산비용을 높이거나 성능을 오히려 떨어뜨릴 수도 있다.
// 그리고 규모가 엄청 큰 프로젝트가 아니면 거의 쓸일이 없다고 한다.
// 따라서 useMemo와 useCallback을 쓰는게 무조건 좋은 것은 아니다.
export default function useCallbackComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // useCallback 미사용
  const plusCount = () => {
    console.log('plusCount', count);
    setCount((prev) => prev + 1);
  };

  // useCallback 사용
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션 한다.
  const plusCountCallback = useCallback(() => {
    console.log('plusCountCallback', count);
    // count는 항상 0이 출력된다. (최초 렌더링 시점의 count값을 기억하고 있기 때문)
    setCount((prev) => prev + 1);
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
    plusCountCallback();
  };

  return (
    <>
      <input value={inputValue} onChange={onChange} />
      <ChildComponent onClick={plusCountCallback} />
      <p>{count}</p>
    </>
  );
}
