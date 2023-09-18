import logo from './logo.svg';
import './App.css';

function App() {
  const flag = false;
  let txt = '';

  if (flag) {
    txt = 'true 입니다.';
  } else {
    txt = 'false 입니다.';
  }

  const styles = {
    backgroundColor: 'red',
    color: 'white',
  };

  const spanSt = {
    textDecoration: 'underline',
  };

  // 실습 2 변수
  const name = '로이';
  const animal = '강아지';

  // 실습 3 변수
  const title = 'Hello World';

  // map 함수
  const lists = ['s', 'i', 'm', 's', 'o', 'n'];

  // filter 함수
  const animals = ['dog', 'cat', 'rabbit'];
  const newAnimals = animals.filter((value) => {
    return value.length > 3;
    // return value.includes('a');
    // true인 값을 반환 -> 보통 코딩테스트에서는 true, false를 반환하지만, 여기는 true인 값을 반환
  });

  console.log(newAnimals);

  // 단축평가
  // && 연산자
  const result = false && 'Hello';
  console.log(result);

  // || 연산자
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  // map, filter 실습
  const users = [
    { id: 1, name: 'John', age: 25, vip: true },
    { id: 2, name: 'Jane', age: 19, vip: false },
    { id: 3, name: 'Alice', age: 30, vip: true },
    { id: 4, name: 'Bob', age: 18, vip: false },
    { id: 5, name: 'Charlie', age: 35, vip: true },
  ];

  const vipUsers = users.filter((user) => {
    return user.vip === true;
  });

  vipUsers.map((user) => {
    console.log(' - ' + user.name);
  });

  // 마지막 실습
  const lastFlag = true;

  return (
    <>
      <h1 style={styles}>Hello React</h1>
      {lastFlag && (
        <>
          {/* <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello React</h1> */}
          <div>리액트 시작</div>
          <input />
          <div> {flag ? <h1>true 입니다.</h1> : <h1>false 입니다.</h1>} </div>
          <div>{txt}</div>

          <hr />

          <h2>실습1-1</h2>
          <div>
            이것은 div입니다
            <h3>이것은 div안에 있는 h3태그 입니다</h3>
          </div>

          <h2>실습1-2</h2>
          <div>
            {' '}
            {3 + 5 == 8 ? <h3>정답입니다!</h3> : <h3>오답입니다!</h3>}{' '}
          </div>

          <hr />

          <h2>실습2</h2>
          <h2>
            제 반려 동물의 이름은 <span style={spanSt}>{name}</span>입니다.
            <br />
            <span style={spanSt}>{name}</span>는{' '}
            <span style={spanSt}>{animal}</span>입니다.
          </h2>

          <hr />

          <h2>실습3</h2>
          <div className="test">{title}</div>
          <div className="two">
            <div className="input">
              아이디&nbsp;:&nbsp;
              <input />
            </div>
            <div className="input">
              비밀번호&nbsp;:&nbsp;
              <input />
            </div>
          </div>

          <hr />

          <h2>실습4</h2>
          <div className="four">
            <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="navy"></div>
            <div className="purple"></div>
          </div>

          <hr />

          {lists.map((value, idx) => {
            return (
              <div key={idx}>
                <p>Hello {value}</p>
              </div>
            );
          })}

          {/* return 작성 */}
          {vipUsers.map((value) => {
            return (
              <div key={value.id}>
                <p>{value.name}</p>
              </div>
            );
          })}

          {/* return 생략 */}
          {vipUsers.map((value) => (
            <div key={value.id}>
              <p>{value.name}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default App;
