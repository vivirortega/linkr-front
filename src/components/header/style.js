import styled from 'styled-components';

const Header = styled.header`
  position: relative;
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
    margin-right: 16px;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    margin-right: 17px;
  }

  .overlay {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: inherit;
  }

  div {
    z-index: 2;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .dropdown {
    z-index: 2;
    position: absolute;
    top: 72px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    padding: 15px;
    border-radius: 0px 0px 0px 20px;
    background-color: #171717;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
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
