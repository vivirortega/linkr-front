import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 18px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
  }

  span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
    word-break: break-word;
    word-wrap: normal;
  }

  textarea {
    background: #ffffff;
    border-radius: 7px;
    padding: 5px 10px;
    width: 100%;
    resize: none;
    overflow: hidden;

    font-family: 'Lato';
    font-size: 14px;
    line-height: 17px;

    color: #4c4c4c;
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

  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
    width: 100%;
    height: 100%;
  }

  .descriptionContainer {
    display: inline;
    font-family: 'Lato';
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
    word-break: break-all;
    margin-bottom: 5px;
    word-break: break-word;
    word-wrap: normal;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
  }

  .icons {
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    cursor: pointer;
  }
`;

const MainLink = styled.div`
  padding: 24px 19.31px 23px 19.31px;
  position: relative;
  gap: 5px;
  display: flex;
  flex-direction: row;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;

  p {
    font-family: 'Lato', Arial;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    font-weight: bold;
    word-break: break-word;
    word-wrap: normal;
  }

  span {
    font-family: 'Lato';
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

  a {
    text-decoration: none;
  }
`;

export { Article, PostWrapper, MainLink };
