import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article, MainLink, Post } from './style';
import Likes from './likes.jsx'

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export default function Posts() {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [reload,setReload] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {},[reload])

  
  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_API_URL + "/timeline", config);

    promise.then((response) => {
      console.log(response.data)
      setPosts(response.data);
      setReload(!reload)
    });

    promise.catch((error) => {
      console.log('erro ao pegar os posts', error);
     
    });
  },[]);

  function loadPosts() {
    const allPosts = posts.map(({post_id, user_name, icon, description, title_url, description_url, url, image_url, like_count, liked, tooltipText }) => { 
      return (
    <Post key={post_id}>
      <div className="row">
        <img src={icon} alt="icon" />
        <div className="content">
          <span>{user_name}</span>
          <p>
            {description}
          </p>
        </div>
        <div className="icon">
          <Likes tooltipText={tooltipText} liked={liked} like_count={like_count} post_id={post_id} callback={() => { setReload(!reload) }} />
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
    )})
    return allPosts
  }

  return (
    <Article>
      {loadPosts()}
    </Article>
  );
}
