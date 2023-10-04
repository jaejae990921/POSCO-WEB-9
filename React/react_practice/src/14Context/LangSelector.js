import { useContext } from 'react';
import SettingContext from './store/setting-context';

export default function LangSelector() {
  const { language, setLanguage } = useContext(SettingContext);

  return (
    <div>
      <h2>현재 언어 : {language}</h2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">영어</option>
      </select>
    </div>
  );
}
