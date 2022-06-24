import { IconContext } from "react-icons";
import { useState, useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import UserContext from '../../contexts/usercontext';
import LikeContext from '../../contexts/likecontext.js';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export default function Likes(props) {
    const { token } = useContext(UserContext);
    const [isConnecting, setIsConnecting] = useState(false)
    const [liked, setLiked] = useState(parseInt(props.liked))
    const [likeCount, setLikeCount] = useState(props.like_count * 1)
    const {like, setLike} = useContext(LikeContext)
    const { post_id, tooltipText } = props
    const baseUrl = process.env.REACT_APP_API_URL

    const headers = {
        Authorization: `Bearer ${token}`,
    }
    const data = {
        postId: post_id
    }

    useEffect(() =>{
        if(like.postId === post_id){
            if(like.liked){
                if(!liked){
                    setLiked(true)
                setLikeCount(likeCount + 1)
                }
            } else{
                if(liked){
                    setLiked(false)
                setLikeCount(likeCount - 1)
                }
                
            }
        }
    },[like])

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
                            setLike({postId:post_id , liked:false})
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
                            setLike({postId:post_id , liked:true})
                        })
                        setIsConnecting(false)
                    }} />
                </IconContext.Provider>
            }
            <p data-tip=''  data-for={post_id.toString()} className="likeCount">{likeCount} Likes</p>
            <ReactTooltip id={post_id.toString()} place="bottom" type="light" effect="solid">
                {liked? tooltipText[0] : tooltipText[1]}
            </ReactTooltip>
        </>

    )
}