import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style.js';

import UserContext from '../../contexts/usercontext.js';

const Trending = () => {
  const { token } = useContext(UserContext);
  const URL = 'http://localhost:4000/hashtags';
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    try {
    const response = await axios.get(URL, {headers: {Authorization: `Bearer ${token}`}});
    setRequest(response.data);
    } catch (error) {
      alert(error);
    }

  }




  return (
    <S.SideBar>
      <h2>trending</h2>
      <ul>
        {request? request.map((hashtag, index) =>{
          return <li 
            key = {hashtag + index}
            onClick = {()=>{navigate(`/hashtag/${hashtag}`)}}
            >
              # {hashtag}
          </li>
        }): "Loading Trending Topics List"}
      </ul>
    </S.SideBar>
  )

}

export default Trending;