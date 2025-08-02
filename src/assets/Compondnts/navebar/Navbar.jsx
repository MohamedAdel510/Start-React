import React, { useEffect , useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css';
export default function Navbar() {

  const [scrolled, setscrolled] = useState(false);

  function handleScroll(){
    setscrolled(window.scrollY > 50);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  
  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark  fixed-top " + (scrolled && "py-4" )}>
          <div className="container">
            <Link id='mohamed' className="navbar-brand" to="/home">Start Framework</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mt-0 mb-lg-0 ">
                <li className="nav-item fw-bolder m-1 ">
                  <NavLink className="nav-link rounded-2 px-2" aria-current="page" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item fw-bolder m-1 ">
                  <NavLink className="nav-link rounded-2 px-2 " to="/portfolio">PORTFOLIO</NavLink>
                </li>
                <li className="nav-item fw-bolder m-1 ">
                  <NavLink className="nav-link rounded-2 px-2 " to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  )
}
