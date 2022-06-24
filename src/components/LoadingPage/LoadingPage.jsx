import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import * as S from './style.js';

const LoadingPage = () => {
  return (
    <S.LoadingPage>
      <Oval
        ariaLabel="loading-indicator"
        height={60}
        width={60}
        strokeWidth={2.5}
        strokeWidthSecondary={2.5}
        color="#333333"
        secondaryColor="#6D6D6D"
      />
    </S.LoadingPage>
  );
};

export default LoadingPage;
