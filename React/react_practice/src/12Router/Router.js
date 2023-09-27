import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Student from './Student';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/student/:name" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
