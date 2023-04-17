import React from 'react'
import './Navbar.css'
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'
import Home from '../Home/Home'
import Bookmark from '../Bookmark/Bookmark'


function Navbar() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
    </Routes>
    <header className='navbar'>
          <Link  className='i' to='/' >Home</Link>
          <Link  className='i' to='/bookmarks' >Bookmarks</Link>
    </header>
    </BrowserRouter>
  );
}

export default Navbar;
