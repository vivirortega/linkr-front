import React, { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import { Button } from './style.js';

const NewPostButton = ({ newPosts }) => {
  return (
    <Button>
      <span>{`${newPosts} new posts, load more!`}</span>
      <FiRefreshCw fill="#FFF" size="20" />
    </Button>
  );
};

export default NewPostButton;
