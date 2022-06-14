import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/timeline/posts';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/timeline" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
