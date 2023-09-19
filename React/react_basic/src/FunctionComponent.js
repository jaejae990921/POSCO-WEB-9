import PropTypes from 'prop-types';

//함수형 컴포넌트
// function 컴포넌트명() {}
// const 컴포넌트명 = () => {}
function FunctionComponent(props) {
  // function FunctionComponent({myClass}) 이렇게 객체구조분해할당 가능
  const myClass = 'kdt9';

  return (
    <>
      <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1>
      <p>여기는 함수형 컴포넌트</p>

      <h2>props {props.myClass}</h2>
      <h2>{props.children}</h2>
    </>
  );
}

// 기본값 설정
FunctionComponent.defaultProps = {
  myClass: 'default class',
};

// 타입 설정
FunctionComponent.propTypes = {
  myClass: PropTypes.string,
};

export default FunctionComponent;
