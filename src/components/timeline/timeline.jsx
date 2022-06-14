import Header from '../header/header';
import Publish from '../publish/topublish';
import Posts from '../posts/posts';
import Main from './style';

export default function Timeline() {
  return (
    <>
      <Header />
      <Main>
        <h1>timeline</h1>
        <Publish />
        <Posts />
      </Main>
    </>
  );
}
