import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import * as S from '../SignUp/style.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // const body = {
    //   email,
    //   password,
    // };
    // try {
    //   await axios.post(process.env.REACT_APP_API_URL + '/signin', body);
    //   alert('Usuário criado com sucesso!');
    //   navigate('/');
    // } catch (err) {
    //   setLoading(false);
    //   alert(err.response.data.message);
    // }
  };

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
          <p className="link" onClick={() => navigate('/signup')}>
            First time? Create an account!
          </p>
        </S.Form>
      </S.FormWrapper>
    </S.SignUpWrapper>
  );
};

export default Login;
