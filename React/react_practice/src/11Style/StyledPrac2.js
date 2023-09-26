import styled from 'styled-components';
import { useState, useRef } from 'react';

const _AddToList = styled.input`
  border-radius: 4px;
  height: 50px;
  border: 1px solid black;
`;

const _AddBtn = styled.button`
  background-color: skyblue;
  border-radius: 4px;
  width: 60px;
  height: 50px;
  border: none;
  margin-left: 10px;
`;

const _ul = styled.ul`
  width: 200px;
  height: 200px;
  overflow: auto;
  border: none;
  list-style: none;
`;

export default function StyledComponent() {
  const [text, setText] = useState('');
  const ulRef = useRef();
  const addToDo = () => {
    const li = document.createElement('li');
    li.innerText = text;
    ulRef.current.appendChild(li);
    setText('');
  };
  return (
    <>
      <_AddToList value={text} onChange={(e) => setText(e.target.value)} />
      <_AddBtn onClick={addToDo}>Add</_AddBtn>
      <br />
      <_ul ref={ulRef}></_ul>
    </>
  );
}
