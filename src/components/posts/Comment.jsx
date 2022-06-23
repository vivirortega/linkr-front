import * as Style from './commentStyle.js'


const Comment = (props)=> {
  const {userName, profilePicture, comment} = props;
  return(
    <Style.CommentContainer>
      <Style.UserImg src = {profilePicture}/>
      <Style.CommentInfo>
        <Style.CommentHeader>
          <span className="userName">{userName}</span>
          <div className="dot"></div>
          <span className="complement">following</span>
        </Style.CommentHeader>
        <Style.CommentContent>
          <span>{comment}</span>
        </Style.CommentContent>
      </Style.CommentInfo>
    </Style.CommentContainer>
  );
}

export default Comment;