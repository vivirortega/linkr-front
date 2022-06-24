import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";
import { InputDiv,List, OutFocus } from './style.js';
import {ReactComponent as SearchSvg} from '../assets/svg/search-outline.svg'
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';


export default function Search() {
    const socket = useContext(SocketContext);
    const [target,setTarget] = useState('');
    const [result,setResult] = useState([]);
    const [focus, setFocus] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        socket.on('search_result',(resultServer) => {
            setResult(resultServer)
           })
    });

    function searchValue(e) {
        setTarget(e.target.value)
        socket.emit('search-value',e.target.value)
    }
    return (
        <>
        <OutFocus display={focus?"flex":"none"} onClick={()=>setFocus(false)}></OutFocus>
        <InputDiv>
        <DebounceInput
            minLength={3}
            debounceTimeout={300}
            type="text"
            placeholder="Search users..."
            value={target}
            onFocus={()=>setFocus(true)}
            onChange={(e) => searchValue(e)}
            required
          />
          <List display={focus?'flex':'none'}>
            {result?.map((user,index) => {
                if(user.message) {
                    return (
                        <div className="user" key={index}>
                            <p>No results</p>
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
          </>
    )
}