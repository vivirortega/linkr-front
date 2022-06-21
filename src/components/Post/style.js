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
  flex-direction: column;
  padding: 20px;
  padding-left: 0px;
  align-items: flex-start;
  gap: 18px;

  @media (max-width: 500px) {
    border-radius: 0px;
  }

  .imgInfoWrapper {
    display: flex;
    gap: 18px;

    padding-left: 20px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
    }
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

    @media (max-width: 500px) {
      font-size: 17px;
    }
  }

  textarea {
    background: #ffffff;
    border-radius: 7px;
    padding: 5px 10px;
    width: 100%;
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

    @media (max-width: 500px) {
      font-size: 15px;
      height: auto;
    }
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





  /* .modal-container {
    .modal-content {
      background-color: #333333;
      border-radius: 50px;
      width: 597px;
      height: 262px;
      display: flex;
      flex-direction: 'column';
      justify-content: 'center';
      align-items: 'center';
      gap: '40px';
      position: 'relative';
    }

    .modal-overlay {
      background-color: rgba(255, 255, 255, 0.9);
      display: flex;
      justify-content: 'center';
      align-items: 'center';
      position: 'fixed';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
    }
  } */
`;

const MainLinkIconsWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`

const IconsContainer = styled.div`
  width: 70px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .iconWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    color: #fff
  }


  .likeIcon {
    margin-left: 3.3px;
  }

  .likeIcon p {
    margin-left: -3.3px;
  }

  .likeCount, 
  .iconWrapper p {
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    text-align: center;
    color: white;
    margin-top: 4px;
  }


`


const MainLink = styled.div`
  flex: 1;
  padding: 24px 19.31px 23px 19.31px;
  position: relative;
  gap: 5px;
  display: flex;
  flex-direction: row;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;

  @media (max-width: 500px) {
    height: 115px;
    padding: 10px 10px 10px 13px;
  }

  p {
    font-family: 'Lato', Arial;
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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
    margin-left: 0px;
    margin-top: 5px;
    word-break: break-all;
    width: 70%;

    @media (max-width: 500px) {
      font-size: 9px;
      width: 150px;
      margin-top: 3px;
    }
  }

  .url {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #cecece;

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

const ModalStyle = styled.div`
  background-color: #333333;
  border-radius: 50px;
  width: 597px;
  height: 262px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;

  h1 {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    width: 340px;

    color: #ffffff;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 27px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 134px;
      height: 37px;
      border-radius: 5px;
      border: none;
      font-family: 'Lato';
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      &.white {
        background-color: #ffffff;
        color: #1877f2;
      }

      &.blue {
        background-color: #1877f2;
        color: #ffffff;
      }
    }
  }
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background-color: rgba(255, 255, 255, 0.9);
`;

export { Article, PostWrapper, MainLinkIconsWrapper, IconsContainer, MainLink, ModalStyle, OverlayStyle };
