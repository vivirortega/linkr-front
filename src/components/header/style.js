import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #151515;
  width: 100vw;
  height: 72px;

  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    margin-left: 28px;
    font-family: 'Passion One', Arial;
  }

  svg {
    color: #ffffff;
    font-size: 20px;
    margin-right: 16px;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    margin-right: 17px;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 400px) {
    h1 {
        margin-left: 17px;
    }

    img {
        margin-right: 16px;
    }

    svg {
        margin-right: 12px;
    }
  }
`;

export default Header;
