import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import ReactTooltip from 'react-tooltip';

import Post from '../Post/Post';
import { Article } from './style';

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default function Posts({ url = '/timeline' }) {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => { }, [reload])


  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_API_URL + url, config);
    promise.then((response) => {
      console.log(response.data)
      setPosts(response.data);
      setReload(!reload)
    });

    promise.catch((error) => {
      console.log('erro ao pegar os posts', error);
      alert(
        'An error occured while trying to fetch the posts, please refresh the page',
      );
    });
  }, []);

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
  {
    posts.map(
      (
        {
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
        },
        index,
      ) => {
        return (
          <Post
            key={index}
            publishing={{
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
            }}
          />
        );
      },
    )
  }
    </Article >
  );
}
