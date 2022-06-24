import { AiOutlineComment } from 'react-icons/ai';


const CommentIcon = (props)=> {
  const{comment_count} = props
  return(
    <div className ="iconWrapper">
      <AiOutlineComment />
      <p>{comment_count} comments</p>
    </div>

  )
}

export default CommentIcon;