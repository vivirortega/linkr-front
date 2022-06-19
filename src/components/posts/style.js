import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
  gap: 20px;
`;

const Post = styled.section`
  width: 100%;
  min-height: 276px;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
    word-break: break-word;
    word-wrap: normal;
  }

  .row {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  p {
    font-family: "Lato";
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
    word-break: break-all;
    min-height: 54px;
    margin-left: 10px;
    word-break: break-word;
    word-wrap: normal;
    margin-bottom: 5px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }

  .icon{
    position: absolute;
    top: 86px;
    left: 18px;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .likeCount{
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    color: white;
    margin-top: 4px;
    margin-right: 6px;
  }
`;

const MainLink = styled.div`
  padding: 24px 19.31px 23px 19.31px;
  position: relative;
  gap: 5px;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  border-radius: 11px;
  width: 82%;
  height: 155px;
  align-self: flex-end;
  margin: 0 21px 20px 0;
  

  p {
    font-family: "Lato", Arial;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    font-weight: bold;
    word-break: break-word;
    word-wrap: normal;
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
    word-break: break-word;
    word-wrap: normal;
  }

  .texts {
    display: flex;
    flex-direction: column;
  }

  .image-url {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 0px;
    width: 153px;
    height: 152px;
    border-radius: 0px 12px 13px 0px;
  }
`;

export {
  Article, Post, MainLink,
};
