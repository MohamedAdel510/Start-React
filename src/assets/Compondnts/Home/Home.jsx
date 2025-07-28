import React from 'react'
import goodBoy from '../../images/avataaars.svg';

export default function Home() {
  return (
    <section className='home vh-100 d-flex justify-content-center align-items-center'>

      <div className="home-contant mt-5 text-center text-white">
        
        <img src={goodBoy} alt="avatar" className='mb-5' />
        
        <div className="header">

        <h1 className='fw-bolder '>START FRAMEWORK</h1>
        <div className="star-icon ">
          <i className="fa-solid fa-star"></i>
        </div>
        </div>
        
        
        <p className=''>Graphic Artist - Web Designer - Illustrator</p>
     
      </div>


    </section>
  )
}
