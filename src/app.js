import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Timeline from './components/timeline/timeline';
import HashtagPage from './components/HashtagPage/HashtagPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import UserContext from './contexts/usercontext.js';
import LikeContext from './contexts/likecontext.js';
import usePersistedState from './hooks/usePersistedState.js';
import { socket, SocketContext } from './contexts/socket';
import UserPage from './components/userPage/userPage';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = usePersistedState('token', null);
  const [user, setUser] = usePersistedState('user', null);
  const [like, setLike] = useState({ post_id: -1, liked: false });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ token, setToken, user, setUser, isLoading, setIsLoading }}
      >
        <SocketContext.Provider value={socket}>
          <LikeContext.Provider value={{ like, setLike }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/timeline"
                element={
                  <ProtectedRoute>
                    <Timeline text={'timeline'} publish={true} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/hashtag/:hashtag"
                element={
                  <ProtectedRoute>
                    <HashtagPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users/:id"
                element={
                  <ProtectedRoute>
                    <UserPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </LikeContext.Provider>
        </SocketContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
