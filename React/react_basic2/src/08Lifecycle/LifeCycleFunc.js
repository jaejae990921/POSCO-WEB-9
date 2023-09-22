import { useState, useEffect } from 'react';

function MyComponent(props) {
  const { number } = props;
  const [text, setText] = useState('');

  // 항상 실행
  useEffect(() => {
    console.log('항상 실행됩니다.');
  });

  // 일부러 빈 배열을 넣어서 최초 한번만 실행되도록 함
  useEffect(() => {
    console.log('컴포넌트가 생성될 때 실행됩니다.');

    // 컴포넌트가 제거될 때 실행됨
    return () => {
      console.log('컴포넌트가 제거될 때 실행됩니다.');
    };
  }, []);

  // text state가 변경될 때만 실행
  useEffect(() => {
    console.log('state가 변경될 때 실행됩니다.');
  }, [text]);

  // 위에서 제거될 때를 제외하고는 무조건 한 번씩은 실행됨

  return (
    <>
      <div>MyComponent Func {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
