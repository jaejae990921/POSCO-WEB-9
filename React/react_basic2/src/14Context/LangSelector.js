import MyContext from './store/lang-context';
import { useContext } from 'react';

export default function LanguageSelector() {
  // 첫번째 방법
  //   return (
  //     <MyContext.Consumer>
  //       {(value) => (
  //         <div>
  //           <h2>현재 선택된 언어 : {value.language}</h2>
  //           <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
  //             {/* lang에서 미리 선언해놔서 변수랑 타입이 뜸 */}
  //             <option value="ko">한국어</option>
  //             <option value="en">영어</option>
  //             <option value="jp">일본어</option>
  //           </select>
  //         </div>
  //       )}
  //     </MyContext.Consumer>
  //   );

  // 두번째 방법
  const value = useContext(MyContext);

  return (
    <div>
      <h2>현재 선택된 언어 : {value.language}</h2>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        {/* lang에서 미리 선언해놔서 변수랑 타입이 뜸 */}
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="jp">일본어</option>
      </select>
    </div>
  );
}
