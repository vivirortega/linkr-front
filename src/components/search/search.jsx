import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";
import { Input,InputDiv,List } from './style.js';
import {ReactComponent as SearchSvg} from '../assets/svg/search-outline.svg'

export default function Search() {
    const socket = useContext(SocketContext);
    const [target,setTarget] = useState('');
    const [result,setResult] = useState([]);
    useEffect(() => {
        socket.on('search_result',(resultServer) => {
            setResult(resultServer)
           })
    },[]);
    useEffect(() =>{
        socket.emit('search-value',target)
    },[target])
    return (
        <InputDiv>
        <Input
            type="text"
            placeholder="Search users..."
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />
          <List display={result===[]?'none':'initial'}>
            {result?.map((user,index) => {
                return (
                    <div className="user">
                        <img src={user.url} alt={user.url} key={index}/>
                        <p>{user.user_name}</p></div>
                )
            })}
          </List>
          <SearchSvg/>
          </InputDiv>
        
    )
}