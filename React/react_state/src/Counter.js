import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    // 부모 클래스인 Component 생성자를 호출
    super(props);

    this.state = {
      number: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // 일반 함수쓸 때는 항상 바인딩 해줘야함
  handleIncrement() {
    // console.log(this); // 바인딩 해주지 않으면 undefined
    // 바인딩 후 this 출력하면 Conter 클래스의 정보가 나옴
    this.setState({ number: this.state.number + 1 });
  }

  // 바인딩 필요없음
  handleDecrement = () => {
    // console.log(this); // 바인딩 해주지 않아도 Counter 클래스의 정보가 나옴
    // this.setState({ number: this.state.number - 1 });

    //setState는 호출 직후에 상태가 바로 업데이트 되지 않음
    //react는 여러 setState 호출을 일괄 처리 함
    //this.setState({ number: this.state.number - 1 }); --- 1번
    //this.setState({ number: this.state.number - 1 }); --- 2번
    //2번의 setState는 1번의 결과를 기반으로 동작하지 않음

    // prevState는 이전 상태를 뜻함 => 즉, 이전 상태에서 - 1 을 해주기 때문에 2씩 감소함
    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });

    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });

    // this.setState((prevState) => ({number: prevState.number - 1})); // 위 코드와 동일
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>{number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </>
    );
  }
}

export default Counter;
