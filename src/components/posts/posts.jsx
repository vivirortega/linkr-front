import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article, MainLink, Post } from './style';
import axios from 'axios';
import ReactHashtag from '@mdnm/react-hashtag';

export default function Posts() {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://backend-linkr.herokuapp.com/timeline",
      config
    );

    promise.then((response) => {
      setPosts(response.data);
    });

    promise.catch((error) => {
      console.log('erro ao pegar os posts', error);
     
    });
  });



  return (
    <Article>
      {posts.map(({id, user_name, icon, description, title_url, description_url, url, image_url }) => { 
        
        return (
      <Post key={id}>
        <div className="row">
          <img src={icon} alt="icon" />
          <div className="content">
            <span>{user_name}</span>
            <p>
              <ReactHashtag renderHashtag={(hashtagValue) => (
                <div className="hashtag">{hashtagValue}</div>
              )}>
                {description}
              </ReactHashtag>
            </p>
          </div>
        </div>
        <MainLink>
          <div className="texts">
            <p>{title_url}</p>
            <span>
              {description_url}
            </span>
            <span>{url}</span>
          </div>
          <img src={image_url} className="image-url" alt="icon" />
        </MainLink>
      </Post>
      )})}
    </Article>
  );
}
