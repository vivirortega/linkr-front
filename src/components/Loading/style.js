import styled from 'styled-components';

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 80px 0;

  p {
    font-family: 'Lato';
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.05em;
    color: #6d6d6d;
  }
`;

export { Loading };
