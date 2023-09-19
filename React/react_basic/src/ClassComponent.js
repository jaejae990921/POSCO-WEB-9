import { Component } from 'react'; // 1번 방법
// import React from 'react'; // 2번 방법

import PropTypes from 'prop-types';

//class형 컴포넌트
//class 컴포넌트명 extends Component{} // 1번 방법
// class ClassComponent extends React.Component {} // 2번 방법
class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render() 함수가 필수
  render() {
    const name = '홍길동';
    const { age } = this.props;

    return (
      <>
        <h1>Hello {name}</h1>
        <h2>안녕하세요 {this.props.name}</h2>
        <h2>나이는 {age}입니다.</h2>
        <p>여기는 클래스형 컴포넌트</p>
      </>
    );
  }
}

// 기본값 설정
ClassComponent.defaultProps = {
  name: 'default name', // 기본 이름
  age: 0, // 기본 나이
};

// 타입 설정
ClassComponent.propTypes = {
  name: PropTypes.string, // 문자열
  age: PropTypes.number, // 숫자
  // 타입이 안맞으면 실행은 되지만 콘솔에 에러가 뜸
  // isRequired를 붙이면 필수로 입력해야함
};

export default ClassComponent;
