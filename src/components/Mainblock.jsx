import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Portfolyo from './pages/Portfolyo'
import Blogs from './pages/Blogs'

export default function Mainblock() {
    return (
    <div className='mainblock'>
        <BrowserRouter>
        <div className="sidebar">
            <Link to="/home" className='sidebaritem'><i class="bi bi-house sidebaritems"></i></Link>
            <Link to="/skills" className='sidebaritem'><i class="bi bi-command sidebaritems"></i></Link>
            <Link to="portfolyo" className='sidebaritem'><i class="bi bi-briefcase sidebaritems"></i></Link>
            <Link to="/blogs" className='sidebaritem'><i class="bi bi-globe sidebaritems"></i></Link>
        </div>
        <div className="body w-100 h-100">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/portfolyo' element={<Portfolyo/>}/>
                <Route path='blogs' element={<Blogs/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    </div>
    )
}
