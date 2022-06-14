import Header from '../header/header';
import Publish from '../publish/topublish';
import Main from './style';

export default function Posts() {
  return (
    <>
      <Header />
      <Main>
        <h1>timeline</h1>
        <Publish />
      </Main>
    </>
  );
}
