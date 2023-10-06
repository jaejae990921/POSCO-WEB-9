import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from './store/login';

export default function Login() {
  const login = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  return (
    <>
      {login ? (
        <>
          <div>로그인하셨습니다.</div>
          <button
            onClick={() => {
              dispatch(loginActions.logout());
            }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <div>로그인해주세요.</div>
          <button
            onClick={() => {
              dispatch(loginActions.login());
            }}
          >
            로그인
          </button>
        </>
      )}
    </>
  );
}
