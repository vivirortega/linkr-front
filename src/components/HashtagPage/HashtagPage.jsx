import Timeline from "../timeline/timeline";
import { useParams } from 'react-router-dom';

const HashtagPage = () => {
  const {hashtag} = useParams();
  return(
    <Timeline text = {hashtag}/>
  )
}

export default HashtagPage;