import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Timeline from './components/timeline/timeline';
import HashtagPage from './components/HashtagPage/HashtagPage';

import UserContext from './contexts/usercontext.js';
import usePersistedState from './hooks/usePersistedState.js';
import { socket, SocketContext } from './contexts/socket';

export default function App() {
  const [token, setToken] = usePersistedState('token', null);
  const [user, setUser] = usePersistedState('user', null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
      <SocketContext.Provider  value={socket}> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline text = {'timeline'} publish = {true} />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        </Routes>
        </SocketContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
