import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
export default function Post({post}) {
  return (
    <div className='post'>
<img  className='postImg' src={post.poster}
alt=''/>
<div className='postDescription'>
    <div className='postCateg'>
        <span>{post.category}</span>
        
    </div>
    <span className='postTitle'>
{post.title}
    </span>
    <hr/>
    <span className='postDate'>{post.date}</span>
    <span className='info'> {post.info}</span>
</div>
<div className='info'>
    <p>{post.info}
    <Link to={`${post.id}`}  state={{title : post.title , poster:post.poster, author:post.author,date:post.date,category:post.category,
        info:post.info,media:post.media}} className="link" >Show Full </Link>
   
</p>
</div>
    </div>
  )
}
