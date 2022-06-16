import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article, MainLink, Post } from './style';
import test from '../assets/test.jpeg';
import axios from 'axios';


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
      "http://localhost:5000/timeline",
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
      {posts.map(({id, user_name, description, title_url, description_url, url }) => { 
        return (
      <Post key={id}>
        <div className="row">
          <img src={test} alt="icon" />
          <div className="content">
            <span>{user_name}</span>
            <p>
              {description}
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
          <img src={test} alt="icon" />
        </MainLink>
      </Post>
      )})}
    </Article>
  );
}
