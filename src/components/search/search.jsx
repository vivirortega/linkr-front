import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";
import { Input,InputDiv,List } from './style.js';
import {ReactComponent as SearchSvg} from '../assets/svg/search-outline.svg'
import { useNavigate } from "react-router-dom";

export default function Search() {
    const socket = useContext(SocketContext);
    const [target,setTarget] = useState('');
    const [result,setResult] = useState([]);
    const [listDisplay,setListDisplay] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        socket.on('search_result',(resultServer) => {
            setResult(resultServer)
           })
    });
    useEffect(() =>{
        if(target!=='') {
          return socket.emit('search-value',target)
        }
        return setResult([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[target])
    return (
        <InputDiv>
        <Input
            type="text"
            placeholder="Search users..."
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            onFocus={()=>setListDisplay(true)}
            required
          />
          <List display={listDisplay?'initial':'none'}>
            {result?.map((user,index) => {
                if(user==='not found') {
                    return (
                        <div className="user">
                            <p>No result</p>
                        </div>
                    )
                }
                return (
                    <div className="user" onClick={()=>navigate(`/users/${user.id}`)} key={index}>
                        <img src={user.url} alt={user.url} key={index}/>
                        <p>{user.user_name}</p></div>
                )
            })}
          </List>
          <SearchSvg/>
          </InputDiv>
        
    )
}