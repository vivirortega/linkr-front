import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import Header from './style';
import test from '../assets/test.jpeg';

import UserContext from '../../contexts/usercontext.js';

export default function Head() {
  const [isOpen, setIsOpen] = useState(false);
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  return (
    <Header>
      <h1>linkr</h1>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineUp size={20} fill="#FFFFFF" />
        ) : (
          <AiOutlineDown size={20} fill="#FFFFFF" />
        )}
        <img src={test} alt="icon" />
      </div>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li onClick={handleLogout}>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </Header>
  );
}
