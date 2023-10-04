import { useState, createContext } from 'react';

// Context 생성
//createComtext () : provider와 consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  // 기본값인데 ''를 적어서 문자열로 타입을 명시할 수 있음
  // 그리고, App.js에서 value. 까지 입력한 상태에서 뭐가 있는지랑 타입을 확인 할 수 있음
  language: '',
  setLanguage: () => {},
});

// provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
