import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';

import Post from '../Post/Post';
import { Article } from './style';

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


export default function Posts(props) {
  let { url } = props;
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(true);
    
  if (url !== '/timeline') url = `/hashtag${url}`;

  useEffect(() => { }, [reload])
  
  const getPosts = async () => {
    const URL = `${process.env.REACT_APP_API_URL}${url}`;


    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    try {
      const response = await axios.get(URL, config);
      console.log(response.data);     
      setPosts(response.data);
      setReload(!reload);
    } catch (error) {
      console.log('erro ao pegar os posts', error);
      alert(
        'An error occured while trying to fetch the posts, please refresh the page',
      );
    }
  };

  useEffect(() => {}, [reload]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {posts.map(
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
            like_count,
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
                like_count,
              }}
              getPosts={getPosts}
            />
          );
        },
      )}
    </Article>
  );
}
