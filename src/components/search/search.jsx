import { io } from "socket.io-client"

export default function Search() {

const socket = io("localhost:4005");
    socket.on('connect', (num)=> {
        console.log(`conectado no ${num}`)
    } )
    return (
        <input></input>
        
    )
}