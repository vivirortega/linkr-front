import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import * as S from '../SignUp/style.js';

import UserContext from '../../contexts/usercontext.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setToken } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password,
    };

    try {
      const {
        data: { token },
      } = await axios.post('https://backend-linkr.herokuapp.com/signin', body);
      setToken(token);
      navigate('/timeline');
    } catch (err) {
      setLoading(false);
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      setToken(token);
      navigate('/timeline');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.SignUpWrapper>
      <S.Infos>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </S.Infos>
      <S.FormWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <S.Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
          <S.Button type="submit" disabled={loading}>
            {loading ? <ThreeDots color="#fff" /> : 'Log In'}
          </S.Button>
          <p className="link" onClick={() => navigate('/sign-up')}>
            First time? Create an account!
          </p>
        </S.Form>
      </S.FormWrapper>
    </S.SignUpWrapper>
  );
};

export default Login;
