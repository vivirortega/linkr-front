import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../contexts/socket";

export default function Search() {
    const socket = useContext(SocketContext);
    const [target,setTarget] = useState('');
    const [result,setResult] = useState({});
    useEffect(() => {
        socket.on('search_result',(resultServer) => {
            setResult(resultServer)
            console.log(resultServer)
           })
    },[]);
    useEffect(() =>{
        socket.emit('search-value',target)
    },[target])
    return (
        <input
            type="text"
            placeholder="Search users..."
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />
        
    )
}