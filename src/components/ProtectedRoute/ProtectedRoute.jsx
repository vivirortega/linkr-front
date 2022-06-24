import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/usercontext';

import LoadingPage from '../LoadingPage/LoadingPage';

const ProtectedRoute = ({ children }) => {
  const { token: currentToken } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const checkAuthentication = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/test`;
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  useEffect(() => {
    if (!currentToken) {
      console.log('Não autorizado');
      navigate('/');
      return;
    }
    checkAuthentication();
  });

  return isAuthenticated ? children : <LoadingPage />;
};

export default ProtectedRoute;
