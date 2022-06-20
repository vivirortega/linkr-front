import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 500px) {
   gap: 16px;
  }
`;

const Post = styled.section`
  width: 100%;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
   border-radius: 0px;
   width: 375px;
   height: 232px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-left: 18px;
    margin-top: 17px;

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
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

    @media (max-width: 500px) {
    font-size: 17px;
    margin-left: 14px;
  }
  }

  .hashtag {
    display: inline;
    font-weight: 700;
  }

  .row {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .descriptionContainer {
    display: inline;
    font-family: "Lato";
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
    word-break: break-all;
    height: 54px;
    margin-left: 18px;
    word-break: break-word;
    word-wrap: normal;

    @media (max-width: 500px) {
    font-size: 15px;
    margin-left: 14px;
    height: auto;
    margin-bottom: 13px;
  }
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
  position: relative;
  gap: 5px;
  display: flex;
  flex-direction: row;
  width: 82%;
  height: 155px;
  align-self: flex-end;
  margin-right: 21px;
  border: 1px solid #4D4D4D;
  border-radius: 11px;

  @media (max-width: 500px) {
    width: 278px;
    height: 115px;
    padding: 1px 1px 1px 13px;
  }
  

  p {
    font-family: "Lato", Arial;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    font-weight: bold;
    word-break: break-word;
    word-wrap: normal;

    @media (max-width: 500px) {
    font-size: 11px;
  }
  }

  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
    margin-left: 0px;
    word-break: break-all;
    width: 70%;

    @media (max-width: 500px) {
    font-size: 9px;
    width: 150px;
    margin-top: 3px;
  }
  }
  
  .url {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #CECECE;

    @media (max-width: 500px) {
    font-size: 9px;
  }
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

    @media (max-width: 500px) {
    width: 95px;
    height: 114px;
  }
  }

  a {
    text-decoration: none;
  }
`;

export {
  Article, Post, MainLink,
};
