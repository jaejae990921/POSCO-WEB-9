import './Style.css'; // css 파일 가져오기
import styled from './Style.module.css'; // css 모듈 가져오기

export default function Style() {
  return (
    <>
      <div className="main">
        <div>안녕</div>
        <div>하이</div>
      </div>

      <div className={styled.main}>
        <div>안녕</div>
        <div>하이</div>
      </div>
    </>
  );
}
