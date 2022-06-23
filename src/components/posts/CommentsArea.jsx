import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import {Collapse} from 'react-collapse';

import { CommentsContainer, Wrapper } from './style';
import Comment from './Comment';


const CommentsArea = (props)=>{
  const {commentsVisible, comments} = props;

  return(  
    <CommentsContainer>
      <Collapse isOpened={commentsVisible} >
        <Wrapper>
          {comments.map(({
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
        </Wrapper>
      </Collapse>
    </CommentsContainer>
  )
}

export default CommentsArea;