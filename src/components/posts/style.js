import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
  gap: 20px;
`;

const Post = styled.section`
  width: 611px;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-left: 18px;
    margin-top: 17px;
  }

  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
    margin-left: 18px;
    margin-top: 19px;
  }

  .row {
    display: flex;
    align-items: flex-start;
  }

  p {
    font-family: "Lato";
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
    word-break: break-all;
    height: 54px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }
`;

const MainLink = styled.div`
  padding: 24px 19.31px 23px 19.31px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  width: 503px;
  height: 155px;

  p {
    font-family: "Lato", Arial;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    font-weight: bold;
  }

  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
    margin-left: 0px;
    margin-top: 5px;
  }

  .texts {
    display: flex;
    flex-direction: column;
  }
`;

export {
  Article, Post, MainLink,
};
