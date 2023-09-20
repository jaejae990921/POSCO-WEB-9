import { Component } from 'react';

class StatePrac2 extends Component {
  // state = {
  //   func: this.hidden,
  //   text: '사라져라',
  // };

  hidden = () => {
    const h1 = document.querySelector('h1');
    h1.style.display = 'none';
    this.setState({
      func: this.show,
      text: '보여라',
    });
  };

  show = () => {
    const h1 = document.querySelector('h1');
    h1.style.display = 'block';
    this.setState({
      func: this.hidden,
      text: '사라져라',
    });
  };

  state = {
    func: this.hidden,
    text: '사라져라',
  };

  render() {
    const { func, text } = this.state;

    return (
      <>
        <button onClick={func}>{text}</button>
        <h1>안녕하세요</h1>
      </>
    );
  }
}

export default StatePrac2;
