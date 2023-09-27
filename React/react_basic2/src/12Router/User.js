import { Link, useSearchParams } from 'react-router-dom';

export const users = [
  {
    id: 1,
    name: '홍길동',
    comment: [
      {
        text: '안녕하세요',
      },
    ],
  },
  {
    id: 2,
    name: '이몽룡',
    comment: [
      {
        text: '반갑습니다',
      },
      {
        text: '어서오세요',
      },
    ],
  },
  {
    id: 3,
    name: '임꺽정',
    comment: [
      {
        text: '좋은아침입니다',
      },
    ],
  },
];

export default function User() {
  // searchParams: URL의 쿼리스트링을 값을 가져오는 것
  // setSearchParams: URL의 쿼리스트링을 값을 할당하는 것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));
  // setTimeout(() => {
  //   setSearchParams({ mode: 'Light' });
  // }, 3000);

  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
