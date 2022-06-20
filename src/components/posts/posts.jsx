import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article } from './style';
import Post from '../Post/Post';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default function Posts({ url = '/timeline' }) {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_API_URL + url, config);
    promise.then((response) => {
      setPosts(response.data);
    });

    promise.catch((error) => {
      console.log('erro ao pegar os posts', error);
      alert(
        'An error occured while trying to fetch the posts, please refresh the page',
      );
    });
  });

  if (!posts.length) {
    return (
      <div align="center">
        <span
          style={{
            fontFamily: 'Lato',
            fontSize: '25px',
            color: 'white',
          }}
        >
          There are no posts yet
        </span>
      </div>
    );
  }
  return (
    <Article>
      {posts.map(
        (
          {
            id,
            user_name,
            icon,
            description,
            title_url,
            description_url,
            url,
            image_url,
          },
          index,
        ) => {
          return (
            <Post
              key={index}
              publishing={{
                id,
                user_name,
                icon,
                description,
                title_url,
                description_url,
                url,
                image_url,
              }}
            />
          );
        },
      )}
    </Article>
  );
}
