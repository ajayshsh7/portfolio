import React from 'react';
import { Footer, Contact} from '../components/main';
import { NavLink } from 'react-router-dom';
import './contactpage.css';


const Contactpage = () => {
  return (
    <div className='contactpage'>
      <div className="contactpage_content">
      <NavLink to = "/"><button className="homebtn">Back to Home</button></NavLink>
      <h1>Have a <span className="span">project</span> ? Consult and discuss about your project </h1>
      <p>We will together find out what exactly you want from your website and how can I help you to archive that goal. <br /><br /> We will find the root cause why your website is not performing well and do you actually need my help.</p>
      </div>
      <Contact />
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Contactpage;