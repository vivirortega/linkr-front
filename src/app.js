import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

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
import { useState, useEffect } from 'react';

export default function App() {
  const [token, setToken] = usePersistedState('token', null);
  const [user, setUser] = usePersistedState('user', null);
  const [like, setLike] = useState({ post_id: -1, liked: false });
  const [isLoading, setIsLoading] = useState(false);
  const [loggedUserFollows, setLoggedUserFollows] = useState([]);

  useEffect(()=>{
    const getFollowers = async ()=> {
      const URL = `${process.env.REACT_APP_API_URL}/follows`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = (await axios.get(URL, config)).data;
        setLoggedUserFollows(response);
      } catch (error) {
        console.log('erro ao pegar os seguidores', error);
      }
    }
  
    getFollowers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUserFollows]);



  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ token, setToken, user, setUser, isLoading, setIsLoading, loggedUserFollows, setLoggedUserFollows }}
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
