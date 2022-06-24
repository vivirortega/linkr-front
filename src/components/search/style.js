import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
  width: 250px;
  height: 35px;
  @media (max-width: 500px) {
    position:absolute;
    left:0;
    top:72px;
    height:35px;
    width: 100%;
  }
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
    width:100%;
    height: 35px;
    background: #ffffff;
    border-radius: 8px;
    font-family: "Lato";
    font-size: 19px;
    line-height: 23px;
    @media (max-width: 500px) {
      border-radius: 0;
    }
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
  background-color: #E7E7E7;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  .user {
    width: 100%;
    height: 55px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin: 7px;
    p {
      font-family: "Lato";
      font-size: 19px;
      line-height: 23px;
      color:#515151;
    }
    img {
      height: 30px;
      width: 30px;
      border-radius: 60%;
      margin-left: 5px;
    }
  }
  h3 {
      font-family: "Lato";
      font-size: 15px;
      line-height: 10px;
      color:#C5C5C5;
  }
  .text {
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  }
`;
