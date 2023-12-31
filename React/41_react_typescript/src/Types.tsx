import React, { useState, useRef } from 'react';

interface Props {
  name?: string;
}

interface Data {
  name: string;
  age: number;
}

// 컴포넌트 제작 방법 2
const Types: React.FC<Props> = (props) => {
  const [count, setCount] = useState<Data>();
  // const [count, setCount] = useState<Data | Props>();
  // const [count, setCount] = useState<Data | null>();
  // 유연하게 사용 가능

  const myInput = useRef<HTMLInputElement>(null);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {};

  const handlefocus = () => {
    myInput.current!.focus(); // 느낌표는 null이 아니라고 확신할 때 사용, 물음표는 null일 수도 있다고 알려줌
  };

  return (
    <>
      <h2>Hello {props.name}</h2>
      <input ref={myInput} />
      <button onClick={handlefocus} />
      <button onClick={(e) => onClick(e)}>버튼</button>
    </>
  );
};

export default Types;

// 컴포넌트 제작 방법 1
// export default function Types({ name }: Props) {
//   return (
//     <>
//       <h2>Hello {name}</h2>
//     </>
//   );
// }
