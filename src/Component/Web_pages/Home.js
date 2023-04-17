import React from 'react'
import '../Style_pages/Home.css'
import Restorent from './Restorent'
import open from '../Assests/wel.jpg'

function Home() {
  return (
    <div className='body'>
    <div className='contaner'>
      <img src={open} className="home-img" alt='Welcome'/>
    </div>
    <div>
    <Restorent/>
    </div> 
    </div>
  )
}

export default Home
