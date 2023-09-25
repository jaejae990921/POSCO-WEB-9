import { Component } from 'react';

// 콜백 함수 형태
class RefSampleClass1 extends Component {
  handleFocus = () => {
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus</p>
        <input
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSampleClass1;
