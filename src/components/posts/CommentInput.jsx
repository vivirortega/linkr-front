import { useState, useContext, useRef } from 'react';
import * as Style from './commentStyle.js'
import {FiSend} from 'react-icons/fi'
import axios from 'axios';

import UserContext from '../../contexts/usercontext';
import CommentContext from '../../contexts/commentContext.js';


const CommentInput = (props)=> {
  const { user, token } = useContext(UserContext);
  const{ handleComments, setComments, numberOfComments, setNumberOfComments} = useContext(CommentContext);
  const { id: userId, image } = user;
  const {postId} = props;
  const [commentValue, setCommentValue] = useState('');
  const spanRef = useRef(null);

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
      const newComments = (await axios.post(URL, body, config));
      console.log(newComments);
      setCommentValue('');
      spanRef.current.innerHTML = '';
      const response = await handleComments();
      setComments({response, post_id: postId});
      setNumberOfComments((numberOfComments*1) + 1);
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
            ref = {spanRef}
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