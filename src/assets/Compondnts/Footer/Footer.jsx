import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

export default function Footer() {
  return (
  <footer className='text-white '>

    <div className="container py-5  d-flex justify-content-between algin-align-items-center">
      
      <div className="location text-center ">
        <h4>LOCATION</h4>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className="text-center around ">
        <h4>AROUND THE WEB</h4>

        <ul className='list-unstyled social d-flex justify-content-center mt-3'>
          <li className='icon'>
            {/* <FontAwesome/>"Icon icon="fa-solid fa-house" />  */}
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li className='icon'>
            {/* <FontAwesomeIcon icon="fa-solid fa-house" />  */}
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li className='icon'>
            {/* <FontAwesomeIcon icon="fa-solid fa-house" />  */}
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li className='icon'>
            {/* <FontAwesomeIcon icon="fa-solid fa-house" />  */}
            <i className="fa-solid fa-globe"></i>
          </li>
        </ul>
      </div>

      <div className="text-center freelancer ">
        <h4>ABOUT FREELANCER</h4>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>

    </div>

    <div className="copy-right text-center py-4">
      <p className='m-0 '>Copyright © Your Website 2021</p>
    </div>
    
  </footer>
  )
}
