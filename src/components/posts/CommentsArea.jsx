import {Collapse} from 'react-collapse';
import { useContext } from 'react';

import { CommentsContainer, Wrapper } from './style';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentContext from '../../contexts/commentContext';

const CommentsArea = (props)=>{
  const {commentsVisible, comments} = useContext(CommentContext);
  const {post_id: postId, response: commentsArr} = comments;

  if(commentsArr) {

    return(  
      <CommentsContainer>
        <Collapse isOpened={commentsVisible} >
          <Wrapper>
            <div className="commentsWrapper">
              {
              commentsArr.map(({
                user_name,
                profile_picture,
                comment
              }, index) => {
                return(
                  <Comment
                    key = {index}
                    userName = {user_name}
                    profilePicture = {profile_picture}
                    comment = {comment}
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