

import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'


import './Home.css'

export default function Home() {
 
   return (

    <>
    <Topbar/>
       <Header/> 
        <div className='home'>
         
        <Posts/>
        <Sidebar/>
        </div>
        </>

  )
}
