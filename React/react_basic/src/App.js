import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import WormComponent from './WormComponent';
import Test from './test';
import Test2 from './test2';
import PropsPrac from './PropsPrac';
import PropsPrac2 from './PropsPrac2';
import Event from './Event';
import EventClass from './EventClass';
import Message from './Message';

function App() {
  return (
    <>
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <WormComponent /> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* 문자열만 " ", 나이 함수 등은 { } 에 작성 */}

      {/* 클래스형 props */}
      {/* <ClassComponent name="심재운" age={25}></ClassComponent> */}
      {/* <ClassComponent /> */}

      {/* 함수형 props */}
      {/* <FunctionComponent myClass="kdt9">자식요소</FunctionComponent>
      <FunctionComponent /> */}

      {/* 클래스형 props 실습 */}
      {/* <PropsPrac food="뿌링클" /> */}
      {/* <PropsPrac /> */}

      {/* 함수형 props 실습 */}
      {/* <PropsPrac2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      /> */}

      {/* 이벤트 핸들러 */}
      {/* <Event /> */}
      <EventClass />

      {/* 이벤트 핸들러 실습 */}
      {/* <Message message="props로 받은 메세지!!!" /> */}
    </>
  );
}

export default App;
