import { useContext, useEffect } from "react";
import { SocketContext } from "../../contexts/socket";

export default function Search() {
    const socket = useContext(SocketContext);
    useEffect(() => {
       socket.on('connect',(skt) => {
        console.log('alo')
       })
        
    }, [])
    return (
        <input></input>
        
    )
}