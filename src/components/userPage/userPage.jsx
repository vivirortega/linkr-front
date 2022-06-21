import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Posts from "../posts/posts";
import { ContentWrapper, Main, MainWrapper, TrendingWrapper } from "../timeline/style";
import { Follow, Unfollow } from "./style";
import Trending from "../Trending/Trending";
import 'dotenv/config';

export default function UserPage() {
    const {id} = useParams();
    const [name,setName] = useState('');
    const [image,setImg] = useState('');
    useEffect(()=> {
      const promise = axios.get(process.env.REACT_APP_API_URL+'/user/'+id);
      promise.then(response => {
        const user = response.data[0];
        setName(user.user_name)
        setImg(user.url)
      })
    })

    return (
      <>
      <Header />
      <Main>
        <MainWrapper>
          <div className="user-timeline">
          <h1> <img src={image} alt={`${name} profile.`}/> {`${name}'s timeline`}</h1>
          <Follow>Follow</Follow>
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