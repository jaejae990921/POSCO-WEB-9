import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  //useNavigate(): Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  // 특정 작업을 끝낸뒤 강제로 다른 페이지로 이동시키고 싶을 때 사용
  const navi = useNavigate();
  const onClick = () => {
    navi('redirect');
    // navi('/redirect'); 로 작성하면 /redirect로 이동하고
    // 그냥 redirect로 작성하면 router에서 설정한 path + redirect로 이동한다.
  };

  //Link: 유저가 직접 클릭하여 페이지를 이동
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}
