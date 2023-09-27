import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export default function Student() {
  const { name } = useParams();
  const navigator = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const realName = searchParams.get('name');

  return (
    <div style={{ backgroundColor: '#EAF788' }}>
      <div>
        학생의 이름은{' '}
        <span style={{ color: 'green', fontWeight: 'bold' }}>{name}</span>{' '}
        입니다.
      </div>
      {realName && (
        <div>
          실제 이름은{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>{realName}</span>
        </div>
      )}
      <button onClick={() => navigator(-1)}>이전 페이지로</button>
    </div>
  );
}
