import { useState } from 'react';

export default function UseStatePrac2() {
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState('사라져라');

  const changeFlag = () => {
    setFlag(!flag);
    setText(flag ? '사라져라' : '보여라');
  };

  return (
    <>
      <button onClick={changeFlag}>{text}</button>
      {flag ? null : <h1>안녕하세요</h1>}
    </>
  );
}
