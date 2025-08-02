import React from 'react'
import { useState } from "react";
import Input from './Input';

export default function Contact() {

  const inputs = ["User Name", "Age", "Email", "Password"];
  // const [float, setfloat] = useState([false, false, false, false]); // dwon

  // function test(indx){
  //   const newFloat = structuredClone(float);
  //   newFloat[indx] = true;
  //   setfloat(newFloat);
  // }



  return (
   <section className='mt-100 py-5'>
    <div className="container">
        <div className="header text-center">
          <h1 className='fw-bolder '>CONTACT SECTION</h1>

          <div className="star-icon star-black-icon">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="form">

          {inputs.map(  (inp, index) =>  <Input  key={index} label = {inp} /> )}
          
          <button type='submit' className='btn btn-success color mt-4'>Send Message</button>
          
        </div>
    </div>
   </section>
  )
}
