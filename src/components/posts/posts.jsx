import { AiOutlineFileImage } from 'react-icons/ai';
import { Article, MainLink, Post } from './style';
import test from '../assets/test.jpeg';

export default function Posts() {
  return (
    <Article>
      <Post>
        <div className="row">
          <img src={test} alt="icon" />
          <div className="content">
            <span>Juvenal Juvêncio</span>
            <p>
              Muito maneiro esse tutorial de Material UI com React, deem uma
              olhada!
            </p>
          </div>
        </div>
        <MainLink>
          <div className="texts">
            <p>Como aplicar o Material UI em um projeto React</p>
            <span>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another page
            </span>
            <span>https://medium.com/@pshrmn/a-simple-react-router</span>
          </div>
          <AiOutlineFileImage size="100" />
        </MainLink>
      </Post>
    </Article>
  );
}
