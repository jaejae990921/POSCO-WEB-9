import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // useEffect는 비동기함수를 직접적으로 지원하지 않음.
    // 비동기함수를 사용하려면 내부에 비동기함수를 정의하고 호출하는 식으로 사용해야 함.
    const getUsers = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
      });
      setUsers(result.data);
    };

    getUsers();

    return () => {
      console.log('연결해제 완료');
    };
  }, []);

  useEffect(() => {
    console.log('유저 정보 업데이트 : ', users.length);
  }, [users]);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function LifeCyclePrac2() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('보기');

  const changeVisible = () => {
    setVisible(() => !visible);
    setText(() => (visible ? '보기' : '숨기기'));
  };

  return (
    <>
      <button onClick={changeVisible}>사용자 목록 {text}</button>
      {visible && <UserList />}
    </>
  );
}
