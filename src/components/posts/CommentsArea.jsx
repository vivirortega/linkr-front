import {Collapse} from 'react-collapse';
import { useContext } from 'react';

import { CommentsContainer, Wrapper } from './style';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentContext from '../../contexts/commentContext';
import UserContext from '../../contexts/usercontext';

const CommentsArea = (props)=>{
  const {commentsVisible, comments} = useContext(CommentContext);
  const {loggedUserFollows} = useContext(UserContext);
  const {post_id: postId, response: commentsArr} = comments;
  const followsIds = []

  loggedUserFollows.forEach(item=>{
    followsIds.push(item.following)
  })


  if(commentsArr) {

    return(  
      <CommentsContainer>
        <Collapse isOpened={commentsVisible} >
          <Wrapper>
            <div className="commentsWrapper">
              {
              commentsArr.map(({
                user_name,
                id,
                profile_picture,
                comment
              }, index) => {
                return(
                  <Comment
                    key = {index}
                    userName = {user_name}
                    userId = {id}
                    profilePicture = {profile_picture}
                    comment = {comment}
                    followsIds = {followsIds}
                  />
                )
              })}
            </div>
            <CommentInput postId = {postId} />
          </Wrapper>
        </Collapse>
      </CommentsContainer>

    )
  } else {
    return(  
      <CommentsContainer>
        <Collapse isOpened={commentsVisible} >
          <Wrapper>
            <CommentInput
            postId = {postId}
            />
          </Wrapper>
        </Collapse>
      </CommentsContainer>
    )
  }

}

export default CommentsArea;