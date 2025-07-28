import React from 'react'
import { useState } from "react";

export default function Contact() {

  const inputs = ["userName", "userAge", "userEmail", "userPassword"];

  const [float, setfloat] = useState([false, false, false, false]); // dwon

  function test(indx){
    const newFloat = structuredClone(float);
    newFloat[indx] = true;
    setfloat(newFloat);
  }

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


          {inputs.map((inp, indx)=> 
            <div className="">
              <label htmlFor={inp} className={'fs-6 text-success ' + (float[indx] ? "floating-up" : "floating-down")}>{inp} </label>
              <input onKeyUp={() => { test(indx)}} id={inp} type="text" className='form-control my-2  border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched ' placeholder={inp} />
            </div>
          )}

  
          <button type='submit' className='btn btn-success color mt-4'>Send Message</button>
        </div>
    </div>
   </section>
  )
}
