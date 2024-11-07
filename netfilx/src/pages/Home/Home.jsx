import React from 'react'
import './Home.css'
import Navbar from '../../components/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
        <Navbar></Navbar>
        <div className="hero">
          <img src={hero_banner} alt="Banner" className='banner-img' />
          <div className="hero-caption">
            <img src={hero_title} alt="Banner Title" className='caption-img'/>
            <p>
              A series of mutilated bodies and taunting notes left outside a Delhi jail send police hunting for a seasoned killer with a grudge against the system.
            </p>
            <div className="hero-btns">
              <button className='btn'>
                  <img src={play_icon} alt="" />Play
              </button>
              <button className='btn dark-btn'>
                  <img src={info_icon} alt="" />More Info
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
