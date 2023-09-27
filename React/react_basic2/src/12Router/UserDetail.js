import { useParams, Link, Outlet } from 'react-router-dom';
import { users } from './User'; // users 배열 가져오기

export default function UserDetail() {
  // Route에 /user/:userId
  const { userId } = useParams();
  // console.log(params); // 객체형태로 출력

  return (
    <>
      <div>
        사용자 {userId}는 {users[Number(userId) - 1].name}입니다.
      </div>
      <Link to="comment">Comment</Link>
      {/* children에 자식 컴포넌트를 띄어줌 */}
      <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
    </>
  );
}
