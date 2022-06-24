import React from 'react';
import reactDom from 'react-dom';
import App from './app';
import * as S from './styles/elements/Base.js';

const root = document.querySelector('.root');
reactDom.render(
  <React.Fragment>
    <S.Reset />
    <S.Base />
    <App />
  </React.Fragment>,
  root,
);
