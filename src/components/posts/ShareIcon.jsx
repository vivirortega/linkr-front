import { FaRetweet } from 'react-icons/fa';


const ShareIcon = (props)=> {
  const {callback,repost_count} = props;

  return(
    <div className ="iconWrapper">
      <FaRetweet onClick={()=>callback()}/>
      <p>{repost_count} re-posts</p>
    </div>

  )
}

export default ShareIcon;