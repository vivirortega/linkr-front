import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Timeline from './components/timeline/timeline';
import HashtagPage from './components/HashtagPage/HashtagPage';

import UserContext from './contexts/usercontext.js';
import usePersistedState from './hooks/usePersistedState.js';
import { socket, SocketContext } from './contexts/socket';
import UserPage from './components/userPage/userPage';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = usePersistedState('token', null);
  const [user, setUser] = usePersistedState('user', null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken, user, setUser, isLoading, setIsLoading }}>
      <SocketContext.Provider  value={socket}> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline text = {'timeline'} publish = {true} />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
          <Route path="/users/:id" element={<UserPage/>}/>
        </Routes>
        </SocketContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
