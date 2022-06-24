import styled from 'styled-components';


export const CommentContainer = styled.div`

  width: 90%;
  position: relative;
  margin-top: 12px;
  left: 30px;
  border-bottom: 1px solid #353535;
  margin-bottom: 15px;

  display: flex;
  gap:18px;

  font-family: 'lato';


`
export const UserImg = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: #ccc;
`

export const CommentInfo = styled.div`
  flex: 1;
`

export const CommentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  .dot {
    width:6px;
    height:6px;
    border-radius:50%;
    background-color: #444
  }

  .complement {
    font-size: 13px;
    color: #444
  }
`

export const CommentContent = styled.div`
  margin-top: 4px;
  margin-bottom: 19px;
  color: #acacac;
`

export const CommentInputArea = styled.div`
  width: 90%;
  height: 50px;
  margin:auto;
  margin-top: 30px;
  margin-bottom: 15px;

  display:flex;
  justify-content:flex-start;
  align-items: flex-start;
  gap: 18px;

  .input-area {
    flex: 1;
    height: fit-content;
    background-color: #252525;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .textarea {
    flex: 1;
    min-height: 39px;
    max-height: 54px;
    overflow-y: scroll;
    background-color: transparent;
    border:none;
    outline: none;
    font-family: 'lato';
    color: #acacac;
    font-size: 13px;
    padding-left: 15px;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    
  }

  .textarea[contenteditable]:empty::before  {
    content: 'write a comment';
    font-style: italic;
  }

  .iconWrapper {
    width: 39px;
    height: 39px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

`

