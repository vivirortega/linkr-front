import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/timeline/posts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
