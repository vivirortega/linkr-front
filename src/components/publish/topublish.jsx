import { useState } from 'react';
import Form from './style';

export default function Publish({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  function publish(e) {
    e.preventDefault();
    setIsLoading(true);
  }
  return (
    <Form onSubmit={publish}>
      <div>
        <img src={user.image} alt={user.name} />
        <p>What are you going to share today?</p>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="http://..."
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={isLoading}
        />
        <input
          className="hashtag"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Awesome article about #javascript"
          disabled={isLoading}
        />
      </div>
      <div className="button">
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </Form>
  );
}
