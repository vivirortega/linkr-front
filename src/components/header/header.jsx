import { AiOutlineDown } from 'react-icons/ai';
import Header from './style';
import test from '../assets/test.jpeg';

export default function Head() {
  return (
    <Header>
      <h1>linkr</h1>
      <div>
        <AiOutlineDown />
        <img src={test} alt="icon" />
      </div>
    </Header>
  );
}
