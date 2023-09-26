import styled from 'styled-components';
import { useState } from 'react';


const _Buttonone = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 100px;
`;

const _Buttontwo = styled.button`
  background-color: red;
  color: black;
  width: 100px;
  height: 100px;
`;

export default function StyledPrac() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      {flag ? (
        <_Buttonone onClick={() => setFlag(!flag)}>색상변경!</_Buttonone>
      ) : (
        <_Buttontwo onClick={() => setFlag(!flag)}>색상변경!</_Buttontwo>
      )}
    </>
  );
}