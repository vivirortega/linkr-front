import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/timeline/posts';
import SignUp from './components/SignUp/SignUp';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/timeline" element={<Posts />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
