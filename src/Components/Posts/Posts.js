import { useSelector } from 'react-redux'

import Post from '../Post/Post'
import './Posts.css'

export default function Posts() {
  const posts= useSelector((store) => store.postReducer.postList);
  return (
    <div className='posts'>
      {posts.map((post)=> <Post key={post.id} post={post}/>)}
    </div>
  )
}
