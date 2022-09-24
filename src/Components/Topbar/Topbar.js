import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOUT } from '../../JS/actions/actions';
import './Topbar.css'


export default function Topbar({auth}) {
 
//search
const navigate=useNavigate();
const [search,setNewSearch]=useState("");

const [nav,setNav]=useState(false);
const posts=useSelector((store)=> store.postReducer.postList);

const searchPost=({posts})=>{

return search===""?
nav:
posts.filter((post)=> post.title.toLowerCase().includes(search.toLowerCase()))?
setNav(true):
nav
}

// const post= post.map((post)=> post.title===search)
// const handleChange = (e) => {
//   const value = e.target.value;
//   setSearch({title: value });
// };
// const handleSearch=()=>{
  
// }

// const handleSubmitSearch = (e) => {
//   e.preventDefault();
//   e.target.reset();
// };
//logout
  const dispatch = useDispatch();
  const handlesubmit=()=>{
    dispatch(logOUT())
  }
  return (
    <div className='top'>
      <ul className='toplistL'>
      {/* {user?  <li className='toplistitem'>{user}</li> : ""}  */}
     
        <Link to="/">
   
        <li className='toplistitem'>HOME</li></Link>
        <li className='toplistitem'>About</li>
        <li className='toplistitem'>Contact</li>
        </ul>
        <ul className='toplistR'>
          {auth===false? null: 
        <Link to="/sign">
        <li className='toplistitem'>
         Write</li></Link>}
         <Link to="/" onClick={handlesubmit}>
        <li className='toplistitem'>Log out</li>
        </Link>
      
      
        <img 
        className='topimg'
        src="/images/logo.png"
        alt='website logo'/>
     
        <div>
          <input
            type="text"
            name="title"
            placeholder="Post title"
            onChange={(e) => setNewSearch(e.target.value)}
          />
          {/* <Link to={`${post.title}`} state={{title : post.title , poster:post.poster, author:post.author,date:post.date,category:post.category,
        info:post.info,media:post.media}}  > */}
        <i  onClick={() => searchPost({ posts })} class="searchIcon   fa fa-search"></i>
        </div>
        </ul>
        {nav===true? ()=> navigate(`/${search}`) : ""}
    </div>
  )
      }
