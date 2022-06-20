import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  height: 209px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 29px;
  display: ${(props) => props.display};

  @media (max-width: 400px) {
    
      width: 375px;
      height: 164px;
      border-radius: 0px;
      margin-bottom: 16px;

    img {
      display: none;
    }

    p {
      margin-top: 10px;
      margin-left: 0px;
    }

    div {
      display: flex;
      justify-content: center;
    }

  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-top: 16px;
    margin-left: 18px;
  }
  p {
    font-family: "Lato", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin-left: 18px;
  }

  div {
    display: flex;
    align-items: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    gap: 5px;

    @media (max-width: 400px) {
      margin-left: 0px;
      margin-top: 10px;
    }
  }

  input {
    background-color: #efefef;
    border-radius: 5px;
    border: none;
    width: 82%;
    height: 30px;
    color: #949494;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    padding: 13px;

    @media (max-width: 400px) {
      width: 345px;
      height: 30px;
    }
  }
  .hashtag {
    width: 82%;
    height: 66px;
    background-color: #efefef;
    border-radius: 5px;

    @media (max-width: 400px) {
      width: 344px;
      height: 47px;
    }
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin-right: 22px;
    margin-top: 5px;
  }

  button {
    border: none;
    background-color: #1877f2;
    border-radius: 5px;
    width: 112px;
    height: 31px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;

    @media (max-width: 400px) {
      height: 22px;
    }
  }

`;

export default Form;
