import { useState } from 'react';

export default function UseStatePrac() {
  const [color, setColor] = useState('black');
  const [text, setText] = useState('검정색 글씨');

  const changeRed = () => {
    setColor('red');
    setText('빨간색 글씨');
  };

  const changeBlue = () => {
    setColor('blue');
    setText('파란색 글씨');
  };

  return (
    <>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
}
