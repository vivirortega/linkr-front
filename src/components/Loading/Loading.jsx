import React from 'react';
import { Oval } from 'react-loader-spinner';
import * as S from './style.js';

const Loading = () => {
  return (
    <S.Loading>
      <Oval
        ariaLabel="loading-indicator"
        height={36}
        width={36}
        strokeWidth={2.5}
        strokeWidthSecondary={2.5}
        color="#333333"
        secondaryColor="#6D6D6D"
      />
      <p>Loading more posts...</p>
    </S.Loading>
  );
};

export default Loading;
