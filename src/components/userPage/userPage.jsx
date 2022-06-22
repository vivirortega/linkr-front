import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Posts from "../posts/posts";
import UserContext from "../../contexts/usercontext";
import { ContentWrapper, Main, MainWrapper, TrendingWrapper } from "../timeline/style";
import { Follow, Unfollow } from "./style";
import Trending from "../Trending/Trending";
import 'dotenv/config';

export default function UserPage() {
    const {id} = useParams();
    const [name,setName] = useState('');
    const [image,setImg] = useState('');
    const [following, setFollowing] = useState(null);
    const [isLoadingFollow, setIsLoadingFollow] = useState(false);
    const { token, user } = useContext(UserContext);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    useEffect(()=> {
      const promise = axios.get(process.env.REACT_APP_API_URL+'/user/'+id);
      promise.then(response => {
        const user = response.data[0];
        setName(user.user_name)
        setImg(user.url)
      })
    })
    
    function insertFollow(){
      const data = {
        follower: user.id,
        following: id
      }

      const promise = axios.post("http://localhost:5000/follows", data, config);

      promise.then((response) => {
        setFollowing(response);
        console.log(response);
      })

      promise.catch((error) => {
        setIsLoadingFollow(false);
        console.log('erro ao seguir', user);
      })
    }

    return (
      <>
      <Header />
      <Main>
        <MainWrapper>
          <div className="user-timeline">
          <h1> <img src={image} alt={`${name} profile.`}/> {`${name}'s timeline`}</h1>
          <Follow disabled={isLoadingFollow} onClick={insertFollow}>Follow</Follow>
          </div>
          <TrendingWrapper>
            <ContentWrapper>
              <Posts url={`/users/${id}`} />
            </ContentWrapper>
            <Trending />
          </TrendingWrapper>
        </MainWrapper>
      </Main>
      </>
    )
}