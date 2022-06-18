import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article, MainLink, Post } from './style';
import axios from 'axios';
import ReactHashtag from 'react-hashtag';
import dotenv from 'dotenv';

dotenv.config()

export default function Posts() {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_API_URL + "/timeline", config);

    promise.then((response) => {
      setPosts(response.data);
    });

    promise.catch((error) => {
      console.log("erro ao pegar os posts", error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  });
  
   if (!posts.length) {
    return (
      <div align="center">
      <span
        style={{
          fontFamily: "Lato",
          fontSize: "25px",
          color: "white",
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
          ({
            id,
            user_name,
            icon,
            description,
            title_url,
            description_url,
            url,
            image_url,
          }) => {
            return (
              <Post key={id}>
                <div className="row">
                  <img src={icon} alt="icon" />
                  <div className="content">
                    <span className="user">{user_name}</span>
                    <div className='descriptionContainer'>
                      <ReactHashtag renderHashtag={(hashtagValue) => (
                        <div className="hashtag">{hashtagValue}</div>
                      )}>
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
              </Post>
            );
          }
        )}
      </Article>
    );
  }
