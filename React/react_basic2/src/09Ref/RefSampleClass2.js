import React, { Component } from 'react';

// 내장 함수 형태
class RefSampleClass2 extends Component {
  // createRef를 사용할 때는 컴포넌트 낸부 변수에 React.createRef()를 할당해야 함
  myInput = React.createRef();

  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus</p>
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSampleClass2;
