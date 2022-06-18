import { createContext } from 'react';
import io from "socket.io-client"; 
import 'dotenv/config';

export const socket = io(process.env.REACT_APP_SOCKET_URL);
export const SocketContext = createContext();