import React from 'react';
import { Footer, Contact} from '../components/main';
import { NavLink } from 'react-router-dom';
import './casestudy.css';

const Casestudy = () => {
  return (
    <div className='casestudy'>
      <div className="casestudy_content">
      <NavLink to = "/"><button className="homebtn">Back to Home</button></NavLink>
      <h1>Get a free case study for your <span className="span">website</span></h1>
      <p>We will discover the root problems with the current design of your website through a short meeting. <br /><br /> And find the solution, to those problems and deliver it to you so you can implement those changes in your design.</p>
      </div>
      <Contact />
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Casestudy