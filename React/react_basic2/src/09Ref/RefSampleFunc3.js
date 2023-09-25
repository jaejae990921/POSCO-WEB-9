import { useRef, useState, useEffect } from 'react';

// 사용자가 웹사이트에서 회원가입 시 버튼을 실수로 두 번 누르는 경우를 방지
export default function RefSampleFunc3() {
  const lastTime = useRef(null);

  const handleSubmit = () => {
    const now = Date.now();

    // 마지막 클릭 후 1초 이내 다시 클릭되면 무시
    if (lastTime.current && now - lastTime.current < 1000) {
      console.log('클릭 시간이 짧습니다.');
      return;
    }

    lastTime.current = now;
    console.log('제출이 완료되었습니다.');
  };

  return (
    <>
      <button onClick={handleSubmit}>제출</button>
    </>
  );
}
