import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons'/>
            <p>Childern</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="nav-profile">
                <img src={bell_icon} alt="" className='icons'/>
                <a href="https://www.youtube.com/watch?v=lpx2zFkapIk">Video Link</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
