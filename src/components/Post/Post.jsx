import React, { useState, useContext, useRef } from 'react';
import { MainLink, PostWrapper } from './style';
import ReactHashtag from 'react-hashtag';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

import Likes from '../posts/likes.jsx'
import UserContext from '../../contexts/usercontext';

const Post = ({ publishing }) => {
  const { user } = useContext(UserContext);
  const textAreaRef = useRef(null);

  const {
    post_id,
    user_name,
    icon,
    description,
    title_url,
    description_url,
    url,
    image_url,
    tooltipText,
    liked,
    like_count
  } = publishing;

  const [editing, setEditing] = useState(false);
  const [description_edit, setDescriptionEdit] = useState(description);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  return (
    <PostWrapper>
      {user_name === user.name && (
        <div className="icons">
          <BsFillPencilFill
            onClick={() => setEditing(!editing)}
            size={15}
            fill={'#FFFFFF'}
          />
          <BsFillTrashFill size={15} fill={'#FFFFFF'} />
        </div>
      )}
      <img src={icon} alt="icon" />
      <div className="col">
        <div className="content">
          <span className="user">{user_name}</span>
        </div>
        {editing ? (
          <form onSubmit={handleEdit}>
            <textarea
              ref={textAreaRef}
              style={
                textAreaRef.current
                  ? { height: textAreaRef.current.scrollHeight }
                  : { height: '5px' }
              }
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleEdit(e);
                }
              }}
              value={description_edit}
              onChange={(e) => setDescriptionEdit(e.target.value)}
            />
          </form>
        ) : (
          <div className="descriptionContainer">
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <div className="hashtag">{hashtagValue}</div>
              )}
            >
              {description}
            </ReactHashtag>
          </div>
        )}
        <div className="likeIcon">
          <Likes tooltipText={tooltipText} liked={liked} like_count={like_count} post_id={post_id}/>
        </div>
        <MainLink>
          <a href={url} target="_blank" rel="noreferrer">
            <div className="texts">
              <p>{title_url}</p>
              <span>{description_url}</span>
              <span>{url}</span>
            </div>
            <img src={image_url} className="image-url" alt="icon" />
          </a>
        </MainLink>
      </div>
    </PostWrapper>
  );
};

export default Post;
