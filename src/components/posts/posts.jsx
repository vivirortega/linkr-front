import { useState, useContext, useEffect } from 'react';
import useInterval from 'use-interval';
import InfiniteScroll from 'react-infinite-scroller';
import UserContext from '../../contexts/usercontext';
import { includesObject } from '../../utils/isEqual.js';

import NewPostButton from '../NewPostButton/NewPostButton';
import Post from '../Post/Post';
import Loading from '../Loading/Loading';
import { Article, LoadDiv, TextFollowDiv } from './style';

import axios from 'axios';
import dotenv from 'dotenv';
import { TailSpin } from 'react-loader-spinner';

dotenv.config();

export default function Posts(props) {
  let { url } = props;
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(true);

  const [newPosts, setNewPosts] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [text, setText] = useState('');

  useInterval(() => {
    const getNewPosts = async () => {
      let newPosts = 0;
      const URL = `${process.env.REACT_APP_API_URL}${url}`;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(URL, config);
        let updatedPosts = response.data;

        updatedPosts = updatedPosts.map((post) => {
          return {
            post_id: post.post_id,
            user_id_repost: post.user_id_repost,
          };
        });

        const postsToCompare = posts.map((post) => {
          return {
            post_id: post.post_id,
            user_id_repost: post.user_id_repost,
          };
        });

        for (const post of updatedPosts) {
          if (!includesObject(postsToCompare, post)) {
            newPosts++;
          }
        }
        return newPosts;
      } catch (error) {
        console.log(error);
      }
    };

    getNewPosts().then((newPosts) => {
      setNewPosts(newPosts);
    });
  }, 15000);

  if (url !== '/timeline' && url[0] + url[1] !== '/u') url = `/hashtag${url}`;

  useEffect(() => {}, [reload]);

  const getPosts = async () => {
    const URL = `${process.env.REACT_APP_API_URL}${url}`;
    console.log(URL);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(URL, config);
      if (!response.data.length) {
        setText('No posts found from your friends.');
      }
      if (response.data.message) {
        const { message } = response.data;
        setText(message);
      }
      setPosts(response.data);
      console.log(response.data);
      setReload(!reload);
    } catch (error) {
      console.log('erro ao pegar os posts', error);
      alert(
        'An error occured while trying to fetch the posts, please refresh the page',
      );
    }
  };

  const loadMore = async () => {
    const offset = posts.length;
    const URL = `${process.env.REACT_APP_API_URL}${url}?offset=${offset}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(URL, config);
      if (!response.data.length) {
        setHasMore(false);
      }
      setPosts([...posts, ...response.data]);
    } catch (error) {
      console.log('erro ao pegar os posts', error);
      alert(
        'An error occured while trying to fetch the posts, please refresh the page',
      );
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (text !== '') {
    return (
      <TextFollowDiv>
        <span
          style={{
            fontFamily: 'Lato',
            fontSize: '25px',
            color: 'white',
          }}
        >
          <h2>{text}</h2>
        </span>
      </TextFollowDiv>
    );
  }
  if (text === '' && !posts.length) {
    return (
      <LoadDiv>
        <TailSpin color="grey" />
        <h2>Loading posts...</h2>
      </LoadDiv>
    );
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<Loading key={posts.length} />}
      useWindow={true}
    >
      {newPosts > 0 && (
        <NewPostButton
          handleClick={() => {
            setNewPosts(0);
            getPosts();
          }}
          newPosts={newPosts}
        />
      )}
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
              liked_by_me,
              like_count,
              user_name_repost,
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
                  liked_by_me,
                  like_count,
                  user_name_repost,
                }}
                getPosts={getPosts}
              />
            );
          },
        )}
      </Article>
    </InfiniteScroll>
  );
}
