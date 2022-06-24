import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";
import { InputDiv,List } from './style.js';
import {ReactComponent as SearchSvg} from '../assets/svg/search-outline.svg'
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';


export default function Search() {
    const socket = useContext(SocketContext);
    const [target,setTarget] = useState('');
    const [result,setResult] = useState([]);
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
        <DebounceInput
            minLength={3}
            debounceTimeout={300}
            type="text"
            placeholder="Search users..."
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />
          <List>
            {result?.map((user,index) => {
                if(user.message) {
                    return (
                        <div className="user" key={index}>
                            <p>No result</p>
                        </div>
                    )
                }
                return (
                    <div className="user" onClick={()=>navigate(`/users/${user.id}`)} key={index}>
                        <img src={user.url} alt={user.url} key={index}/>
                        <div className="text">
                        <h3>{user.user_followed?'• following':''}</h3><p>{user.user_name}</p>
                        </div>
                        </div>
                )
            })}
          </List>
          <SearchSvg/>
          </InputDiv>
        
    )
}