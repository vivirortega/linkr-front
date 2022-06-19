import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  h1 {
    font-family: 'Oswald', Arial;
    color: #ffffff;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    padding-top: 78px;
    margin-bottom: 43px;
    width: 611px;
  }
`;

export const MainWrapper = styled.div`
  width: 95%;
  max-width: 940px;
  margin: auto;
`

export const TrendingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ContentWrapper = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
`
