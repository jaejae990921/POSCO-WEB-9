import { useState, useEffect, useRef } from 'react';

// 로컬 변수로 사용 - 렌더링되어도 값을 그대로 유지(리렌더링에 영향을 주지 않음)
export default function RefSampleFunc2() {
  const [time, setTime] = useState(0);
  const idRef = useRef(0);

  const plusIdRef = () => {
    setTime(0);
    idRef.current += 1; // 로컬 변수 값 변경
    console.log(idRef.current);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    //setInterval에 설정된 반복을 취소
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Ref Sample</h1>
      <h2>{time}</h2>

      {/* 1. useRef로 생성된 객체는 .current라는 속성을 가지고 있어 이를 통해 변수에 접근할 수 있다. */}
      {/* 2. useRef로 생성된 변수는 컴포넌트가 리렌더링되어도 값이 유지된다. */}
      {/* 3. useRef의 값이 변경되어도 컴포넌트는 리렌더링되지 않는다. */}

      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>
    </>
  );
}
