import { useState, useMemo } from 'react';

export default function useMemoComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // count가 변경될때만 실행
  // inputValue가 변경되어도 컴포넌트는 리렌더링 되지만 calc는 다시 계산되지 않음
  // 제공된 함수의 반환값을 기억하며, 의존성 배열의 값이 변경될때만 해당 함수를 재실행
  // 계산결과를 저장하여 재사용하므로, 불필요한 데이터 불러오기와 계산을 방지 -> 성능 최적화
  const calc = useMemo(() => {
    // 불필요한 계산 일부러 넣음
    for (let i = 0; i < 10000; i++) {
      // i = i * 2;
    }
    return count * 2;
  }, [count]);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setCount(() => count + 1)}>PLUS</button>
      <p>count: {count}</p>
      <p>calc: {calc}</p>
    </>
  );
}
