import { useState } from 'react';
import { LanguageProvider } from './14Context/store/lang-context';
import LanguageSelector from './14Context/LangSelector';

function App() {
  return (
    <>
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    </>
  );
}

export default App;
