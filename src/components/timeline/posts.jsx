import Header from '../header/header';
import { Main, Publish } from './style';
import test from '../assets/test.jpeg';

export default function Posts() {
  return (
    <>
      <Header />
      <Main>
        <h1>timeline</h1>
        <Publish>
          <div>
            <img src={test} alt="icon" />
            <p>What are you going to share today?</p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="http://..." required />
            <input
              className="hashtag"
              type="text"
              placeholder="Awesome article about #javascript"
            />
          </div>
          <div className="button">
            <button type="submit">Publish</button>
          </div>
        </Publish>
      </Main>
    </>
  );
}
