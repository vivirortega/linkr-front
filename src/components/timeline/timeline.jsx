import { useContext } from 'react';
import Header from '../header/header';
import Publish from '../publish/topublish';
import Posts from '../posts/posts';
import Main from './style';

import UserContext from '../../contexts/usercontext';

export default function Timeline() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <Main>
        <h1>timeline</h1>
        <Publish user={user} />
        <Posts />
      </Main>
    </>
  );
}
