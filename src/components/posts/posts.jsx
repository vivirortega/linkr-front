import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/usercontext';
import { Article, MainLink, Post } from './style';
import axios from 'axios';
import ReactHashtag from 'react-hashtag';
import dotenv from 'dotenv';
import { useNavigate, Link } from 'react-router-dom';

dotenv.config();


export default function Posts(props) {
  let { url } = props;
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (url !== '/timeline') url = `/hashtag${url}`;

  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_API_URL + url, config);
    promise.then((response) => {
      console.log(response.data )
      setPosts(response.data);
    });

    promise.catch((error) => {
      console.log("erro ao pegar os posts", error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  
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
            console.log(posts)
            return (
              <Post key={id}>
                <div className="row">
                  <img src={icon} alt="icon" />
                  <div className="content">
                    <span className="user">{user_name}</span>
                    <div className='descriptionContainer'>
                      <ReactHashtag 
                        renderHashtag={(hashtagValue) => (
                          <div className="hashtag" onClick = {()=>{
                            const hashtagArr = hashtagValue.split('#');
                            const hashtagText = hashtagArr[hashtagArr.length-1];
                            navigate(`/hashtag/${hashtagText}`);
                          }}>
                            {hashtagValue}
                          </div>
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
