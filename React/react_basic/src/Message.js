// 클래스형 컴포넌트
import { Component } from 'react';

class Message extends Component {
  flagChange = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.flagChange}>Show message</button>
      </>
    );
  }
}

export default Message;

// 함수형 컴포넌트
// function Message(props) {
//   const flagChange = () => {
//     alert(props.message);
//   };

//   return (
//     <>
//       <button onClick={flagChange}>Show message</button>
//     </>
//   );
// }

// export default Message;
