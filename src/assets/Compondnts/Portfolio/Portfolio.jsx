import React from 'react'
import port1 from '../../images/port1.png';
import port2 from '../../images/port2.png';
import port3 from '../../images/port3.png';
import { useState } from "react";


export default function Portfolio() {

  const images = [port1, port2, port3, port1, port2, port3];

  const [Modal, setModal] = useState(null);
  const [display, setdisplay] = useState("d-none");


 function hideModal(e){
  console.log(e.target.tagName);

  if(e.target.tagName!="IMG"){
    setdisplay("d-none")
  }
  
 }

  return (
    <section className='mt-100 py-5'>
      <div className="container ">
       
        <div className="header text-center">
          <h1 className='fw-bolder '>PORTFOLIO COMPONENT</h1>

          <div className="star-icon star-black-icon">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="row ">
            {images.map((port, index) =>
              <div className="col-md-6 col-lg-4 " key={index}>
                <figure className='rounded-2 overflow-hidden position-relative' onClick={ () => { setModal(port); setdisplay('d-block') } } >
                  <img src={port} alt="" className='w-100'/>
                  <div className="layer position-absolute end-0 start-0 top-0 bottom-0 text-white d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus plus "></i>
                  </div>
                </figure>
             </div>
            )}
        </div>

      </div>
            {/* setdisplay("d-none") */}  

      <div onClick={(e) => {hideModal(e)}} className={ display +" modal-layer position-fixed bg-black bg-opacity-25 top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center"}>
        {Modal ? <img src={Modal} alt="" className='my-width-for-modal' /> : null}
      </div>
    </section>
  )
}
