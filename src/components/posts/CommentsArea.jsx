import {Collapse} from 'react-collapse';
import { useContext } from 'react';

import { CommentsContainer, Wrapper } from './style';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentContext from '../../contexts/commentContext';

const CommentsArea = (props)=>{
  const {commentsVisible, comments} = useContext(CommentContext);
  const {post_id: postId, response: commentsArr} = comments;

  if(comments.response) {

    return(  
      <CommentsContainer>
        <Collapse isOpened={commentsVisible} >
          <Wrapper>
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
            <CommentInput postId = {postId} />
          </Wrapper>
        </Collapse>
      </CommentsContainer>

    )
  } else {
    console.log("entrou no else")
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