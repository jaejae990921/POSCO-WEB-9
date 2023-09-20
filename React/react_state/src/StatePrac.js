import { Component } from 'react';

class StatePrac extends Component {
  state = {
    color: 'black',
    text: '검정색 글씨',
  };

  changeRed = () => {
    this.setState({
      color: 'red',
      text: '빨간색 글씨',
    });
  };

  changeBlue = () => {
    this.setState({
      color: 'blue',
      text: '파란색 글씨',
    });
  };

  render() {
    const { color, text } = this.state;

    return (
      <>
        <h1 style={{ color }}>{text}</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </>
    );
  }
}

export default StatePrac;