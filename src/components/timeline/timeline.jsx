import { useContext } from 'react';
import Header from '../header/header';
import Publish from '../publish/topublish';
import Posts from '../posts/posts';
import { Main, MainWrapper, TrendingWrapper, ContentWrapper } from './style';
import Trending from '../Trending/Trending';

import UserContext from '../../contexts/usercontext';

export default function Timeline(props) {
  const { text, publish } = props;
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <Main>
        <MainWrapper>
          <h1>{text}</h1>
          <TrendingWrapper>
            <ContentWrapper>
              <Publish user={user} publish = {publish} />
              <Posts />
            </ContentWrapper>
            <Trending />
          </TrendingWrapper>
        </MainWrapper>
      </Main>
    </>
  );
}
