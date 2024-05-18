import React, {useState} from 'react'
import './navbar.css';


const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className='nav'>
      <div className={`${isNavbarVisible ? 'mobile-menu' : 'hidden'}`}>
        <ul>
          <li><a href="http://">Home</a></li>
          <li><a href="http://">About Me</a></li>
          <li><a href="http://">Contact Me</a></li>
          <li><button className='navbtn'>Work</button></li>
        </ul>
      </div>
      <div >
        <a href="#" className='hamdiv' onClick={toggleNavbar}>
          <svg className='hambtn' width="42" height="18" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H41" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 9L33 9" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 17L25 17" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Navbar