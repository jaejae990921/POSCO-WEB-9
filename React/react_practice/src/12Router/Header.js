import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#EAF788' }}>
      <Link to="/">
        <h2>ReactRouter 실습</h2>
      </Link>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ margin: '4px', float: 'left' }}>
            <Link to="/student/kdt">학생KDT</Link>
          </li>
          <li style={{ margin: '4px', float: 'left' }}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={{ margin: '4px', float: 'left' }}>
            <Link to="/student/new?name=kdt9">searchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
