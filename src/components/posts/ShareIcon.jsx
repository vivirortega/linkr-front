import { FaRetweet } from 'react-icons/fa';


const ShareIcon = (props)=> {
  const {callback} = props;

  return(
    <div className ="iconWrapper">
      <FaRetweet onClick={()=>callback()}/>
      <p>3 re-posts</p>
    </div>

  )
}

export default ShareIcon;