import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  width: 250px;
  height: 35px;
  svg {
    position: absolute;
    height: 20px;
    right: 0;
    top: 7px;
    color: #c6c6c6;
  }
  input {
    padding: 0 10px;
    min-width: 250px;
    height: 35px;
    background: #ffffff;
    border-radius: 8px;
    font-family: "Lato";
    font-size: 19px;
    line-height: 23px;
    &:focus {
      border: none;
      outline-color: #c6c6c6;
      outline-style: solid;
      outline-width: 2px;
    }
    &::placeholder {
      color: #c6c6c6;
    }
    
  }
`;
export const List = styled.div`
  position: absolute;
  display: ${(props) => props.display};
  flex-direction: column;
  top: 36px;
  left: 3px;
  width: 97%;
  max-height: 300px;
  background-color: #c6c6c6;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
  .user {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin: 5px;
    p {
      font-family: "Lato";
      font-size: 19px;
      line-height: 23px;
    }
    img {
      height: 30px;
      width: 30px;
      border-radius: 60%;
      margin-left: 5px;
    }
  }
`;
