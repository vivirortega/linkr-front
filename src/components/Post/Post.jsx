import React, { useState, useContext, useRef } from 'react';
import { MainLink, PostWrapper } from './style';
import ReactHashtag from 'react-hashtag';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/usercontext';

const Post = ({ publishing }) => {
  const { user } = useContext(UserContext);
  const textAreaRef = useRef(null);

  const {
    id,
    user_name,
    icon,
    description,
    title_url,
    description_url,
    url,
    image_url,
  } = publishing;

  const [editing, setEditing] = useState(false);
  const [description_edit, setDescriptionEdit] = useState(description);
  const navigate = useNavigate();
  

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <PostWrapper>
      {user_name === user.name && (
        <div className="icons">
          <BsFillPencilFill
            onClick={() => {
              setEditing(!editing);
            }}
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
                handleEdit();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setEditing(false);
              }
            }}
            value={description_edit}
            onChange={(e) => setDescriptionEdit(e.target.value)}
          />
        ) : (
          <div className="descriptionContainer">
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <div
                  key={hashtagValue + (Math.random() * 100).toString()}
                  className="hashtag"
                  onClick = {()=>{
                    const hashtagArr = hashtagValue.split('#');
                    const hashtagText = hashtagArr[hashtagArr.length-1];
                    navigate(`/hashtag/${hashtagText}`);
                  }}
                >
                  {hashtagValue}
                </div>
              )}
            >
              {description}
            </ReactHashtag>
          </div>
        )}
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
