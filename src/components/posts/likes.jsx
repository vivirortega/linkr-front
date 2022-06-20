import { IconContext } from "react-icons";
import { useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import UserContext from '../../contexts/usercontext';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export default function Likes(props) {
    const { token } = useContext(UserContext);
    const [isConnecting, setIsConnecting] = useState(false)
    const [liked, setLiked] = useState(props.liked)
    const [likeCount, setLikeCount] = useState(props.like_count * 1)
    const { post_id, tooltipText } = props
    const baseUrl = process.env.REACT_APP_API_URL

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    const data = {
        postId: post_id
    }

    return (
        <>
            {liked ?
                <IconContext.Provider value={{ color: 'red', size: 25, className: "Icons" }}>
                    <RiHeartFill onClick={() => {
                        if (isConnecting) return
                        setIsConnecting(true)
                        const promise = axios.delete(baseUrl + '/like', { headers, data })
                        promise.then((e) => {
                            setLiked(false)
                            setLikeCount(likeCount - 1)
                        })
                        promise.catch((e) => {
                            console.error("Não foi possível retirar seu like")
                        })

                        setIsConnecting(false)
                    }} />
                </IconContext.Provider > :


                <IconContext.Provider value={{ color: 'white', size: 25, className: "Icons" }}>
                    <RiHeartLine onClick={() => {
                        if (isConnecting) return
                        setIsConnecting(true)
                        const promise = axios.post(baseUrl + '/like', { data }, { headers })
                        promise.then(() => {
                            setLiked(true)
                            setLikeCount(likeCount + 1)
                        })
                        setIsConnecting(false)
                    }} />
                </IconContext.Provider>
            }
            <p data-tip=''  data-for={post_id.toString()} className="likeCount">{likeCount} Likes</p>
            <ReactTooltip id={post_id.toString()} place="bottom" type="light" effect="solid">
                {tooltipText}
            </ReactTooltip>
        </>

    )
}