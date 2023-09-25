import { useRef } from 'react';

export default function RefSampleFunc1() {
  const myInput = useRef(); // 1. useRef()를 사용하여 ref 생성

  const handleFocus = () => {
    // 3. useRef()로 만든 객체의 current값에 접근하여 focus() 적용
    myInput.current.focus();
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭 시 input에 focus</p>
      {/* 2. 선택하고 싶은 DOM에 ref prop 설정 */}
      <input ref={myInput} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
}
