import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Posts from "../posts/posts";
import { ContentWrapper, Main, MainWrapper, TrendingWrapper } from "../timeline/style";
import Trending from "../Trending/Trending";
import 'dotenv/config';

export default function UserPage() {
    const {id} = useParams();
    const [name,setName] = useState('');
    useEffect(()=> {
      const promise = axios.get(process.env.REACT_APP_API_URL+'/user/'+id);
      promise.then(response => {
        const user = response.data[0];
        setName(user.user_name)
      })
    })

    return (
      <>
      <Header />
      <Main>
        <MainWrapper>
          <h1>{`${name}'s timeline`}</h1>
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