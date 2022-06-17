import * as S from './style.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password,
      userName,
      imageUrl,
    };

    try {
      await axios.post( process.env.REACT_APP_API_URL + '/signup', body);
      alert('Usuário criado com sucesso!');
      navigate('/');
    } catch (err) {
      setLoading(false);
      alert(err);
    }
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
          <S.Input
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={loading}
            required
          />
          <S.Input
            type="url"
            placeholder="picture url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            disabled={loading}
            required
          />
          <S.Button type="submit" disabled={loading}>
            {loading ? <ThreeDots color="#fff" /> : 'Sign Up'}
          </S.Button>
          <p className="link" onClick={() => navigate('/')}>
            Switch back to log in
          </p>
        </S.Form>
      </S.FormWrapper>
    </S.SignUpWrapper>
  );
};

export default SignUp;
