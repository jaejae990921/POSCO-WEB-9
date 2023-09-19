import { Component } from 'react';

class EventClass extends Component {
  constructor(props) {
    //super 부모의 값을 사용하기 위해 넣는 키워드
    super(props);

    // this 바인딩
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('클래스형 컴포넌트');
  }

  handleClick2 = () => {
    alert('클래스형 컴포넌트2');
  }

  handleClick3 = (str) => {
    alert(str);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭Class</button>;
        <button onClick={this.handleClick2}>클릭Class2</button>;
        <button onClick={() => this.handleClick3('클릭Class3')}>클릭Class3</button>;
      </>
    );
  }
}

export default EventClass;
