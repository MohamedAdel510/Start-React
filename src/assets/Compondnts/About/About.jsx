import React from 'react'

export default function About() {
  return (
    <section className='mt-5 home vh-100 d-flex justify-content-center align-items-center '>
      <div className="container text-white text-center">
        <div className="header">
          <h1 className='fw-bolder '>ABOUT COMPONENT</h1>

          <div className="star-icon ">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-start">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6 text-start">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
