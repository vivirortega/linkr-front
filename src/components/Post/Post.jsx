import React, { useContext } from 'react';
import { MainLink, PostWrapper } from './style';
import ReactHashtag from 'react-hashtag';
import { BsFillTrashFill } from 'react-icons/bs';

import UserContext from '../../contexts/usercontext';

const Post = ({ publishing }) => {
  const { user } = useContext(UserContext);

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

  return (
    <PostWrapper>
      {user_name === user.name && (
        <BsFillTrashFill className="trash-icon" size={15} fill={'#FFFFFF'} />
      )}
      <div className="row">
        <img src={icon} alt="icon" />
        <div className="content">
          <span className="user">{user_name}</span>
          <div className="descriptionContainer">
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <div className="hashtag">{hashtagValue}</div>
              )}
            >
              {description}
            </ReactHashtag>
          </div>
        </div>
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
    </PostWrapper>
  );
};

export default Post;
