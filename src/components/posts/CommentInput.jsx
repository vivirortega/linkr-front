import { useState, useContext } from 'react';
import * as Style from './commentStyle.js'
import {FiSend} from 'react-icons/fi'
import axios from 'axios';

import UserContext from '../../contexts/usercontext';
import CommentContext from '../../contexts/commentContext.js';


const CommentInput = (props)=> {
  const { user, token } = useContext(UserContext);
  const{ handleComments, setComments} = useContext(CommentContext);
  const { id: userId, image } = user;
  const {postId} = props;
  const [commentValue, setCommentValue] = useState('');

  const sendComment = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/comment`;
    

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      userId, 
      postId,
      comment: commentValue,
    }

    try {
      const response = (await axios.post(URL, body, config));
      console.log(response);
      setCommentValue('');
      const newComments = await handleComments();
      setComments({newComments, post_id: postId});
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return(
    <Style.CommentInputArea>
      <Style.UserImg src = {image} />
        <div className="input-area">
          <span 
          className="textarea" 
          role = "textbox" 
          contentEditable
          onInput={(e)=>{
            console.log(postId)
            setCommentValue(e.currentTarget.textContent)}}
          >
          </span>
          <div className="iconWrapper" onClick={sendComment}>
            <FiSend />
          </div>
        </div>
    </Style.CommentInputArea>
  );
}

export default CommentInput;