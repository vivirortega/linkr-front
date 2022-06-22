import { FiRefreshCw } from 'react-icons/fi';

import { Button } from './style.js';

const NewPostButton = ({ newPosts, handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <span>{`${
        newPosts >= 20 ? '20+' : newPosts
      } new posts, load more!`}</span>
      <FiRefreshCw fill="#FFF" size="20" />
    </Button>
  );
};

export default NewPostButton;
