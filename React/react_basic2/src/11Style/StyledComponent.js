import styled from 'styled-components';

// 기본 사용방법
const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

// props 사용방법
const _Boxtwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

// 상속 받아서 사용
const _Circle = styled(_Boxtwo)`
  // _Boxtwo를 상속받아서 사용
  border-radius: 50%;
`;

// 기존태그를 이름만 바꿔서 사용하는 방법
const _Btn = styled.button`
  background-color: skyblue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

// html태그에 옵션값 넣는 방법
const _Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

// 중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: orange;
  line-height: 200px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: green;
  }

  p {
    color: white;
    font-weight: bold;
    // pseudo
    &:hover {
      background-color: purple;
    }
  }
`;

export default function StyledComponent() {
  return (
    <>
      {/* 기본 사용방법 */}
      {/* <_Boxone></_Boxone> */}

      {/* props 사용방법 */}
      {/* <_Boxtwo color={'red'}></_Boxtwo> */}
      {/* <_Boxtwo color={'green'}></_Boxtwo> */}

      {/* 상속 받아서 사용 */}
      {/* <_Circle color={'pink'}></_Circle> */}

      {/* 기존태그를 이름만 바꿔서 사용하는 방법 */}
      {/* css가 똑같을 경우 as 를 사용해서 사용할 수 있음 */}
      {/* <_Btn>버튼</_Btn> */}
      {/* <_Btn as="a" href="https://www.naver.com"> */}
      {/* 네이버 */}
      {/* </_Btn> */}

      {/* html태그에 옵션값 넣는 방법 */}
      <_Input />
      <_Input />
      <_Input />

      {/* 중첩 */}
      <_Boxthree>
        <p>Hello Styled</p>
        <_Input />
      </_Boxthree>
    </>
  );
}
