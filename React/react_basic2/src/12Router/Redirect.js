import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 사용자가 직접 클릭해서 페이지를 이동시킬 때는 그냥 Link를 사용하면 되고,
// 어떤 작업을 마친 뒤 강제로 페이지를 이동시킬 때는 useNavigate()를 사용하면 된다.
// 상황에 따라 적절하게 사용하면 된다.
export default function Redirect() {
  const navi = useNavigate();
  useEffect(() => {
    navi('/user');
  }, []);
  return <div>Redirect</div>;
}
