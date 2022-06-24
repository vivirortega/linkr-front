import * as Style from './commentStyle.js'
import { useContext } from 'react';

import UserContext from '../../contexts/usercontext';
import CommentContext from '../../contexts/commentContext.js';


const Comment = (props)=> {
  const {userName: commentUserName, userId: commentUserId, profilePicture, comment, followsIds} = props;
  const { user } = useContext(UserContext);
  const { postAuthor} = useContext(CommentContext)
  const { name: loggedUserName } = user;
  let append = '';

  

  if(commentUserName === loggedUserName) {
    append = "";
  }
  if(commentUserName === postAuthor) {
    append = "• post's author";
  } 
  if(followsIds.indexOf(commentUserId) !== -1) {
    append = "• following";
  }



  return(
    <Style.CommentContainer>
      <Style.UserImg src = {profilePicture}/>
      <Style.CommentInfo>
        <Style.CommentHeader>
          <span className="userName">{commentUserName}</span>
          <span className="complement">{append}</span>
        </Style.CommentHeader>
        <Style.CommentContent>
          <span>{comment}</span>
        </Style.CommentContent>
      </Style.CommentInfo>
    </Style.CommentContainer>
  );
}

export default Comment;