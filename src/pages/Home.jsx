import React from 'react';
import { Navbar, Footer, Process, Contact } from '../components/main';
import myimg from '../assets/myimg.png';
import { NavLink } from 'react-router-dom';
import './home.css';


const Home = () => {
  return (
    <div className='homecontainer'>
      {/* <nav>
        <Navbar />
      </nav> */}
      <div className="hero">
        <div className="maincontent">
          <img src={myimg} alt="" className="img" />
          <div className="content">
            <h1 className="heroH">
              Helping Business Grow Through <span className="span">Web Design (UI/UX)</span>
            </h1>
            <p className='heroP'>I am a strategic web UI/UX designer and web developer focused on driving business growth</p>
            <NavLink to = "/contactpage"><button className="mainbtn">Discuss Project</button></NavLink>
            <NavLink to = "/casestudy"><button className="secbtn">Free Case Study</button></NavLink>
          </div>
        </div>
      </div>
      <div className="main">
      <h1 className='whymeH'>Why <span className='span'>Me</span> ?</h1>
      <div className="whyme">
        <div className="whyme-text firstT">
          <h2 className="whymeH2">Have more value than you pay</h2>
          <p>I will make sure that the value you get is much more than the cost of the project. <br/>The work is going to be authenticated and quality work, So you do not have to worry about anything.</p>
        </div>
        <div className="circle firstC">
          <svg className="num" width="243" height="243" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M121.5 238C185.841 238 238 185.841 238 121.5C238 57.1588 185.841 5 121.5 5C57.1588 5 5 57.1588 5 121.5C5 185.841 57.1588 238 121.5 238ZM121.5 243C188.603 243 243 188.603 243 121.5C243 54.3974 188.603 0 121.5 0C54.3974 0 0 54.3974 0 121.5C0 188.603 54.3974 243 121.5 243Z" fill="#1E1E1E" />
            <path d="M137.544 74.8181V165H118.477V92.9161H117.949L97.2969 105.862V88.9531L119.622 74.8181H137.544Z" fill="#FBBD06" />
          </svg>

        </div>
      </div>
      <div className="whyme">
        <div className="whyme-text secT">
          <h2 className="whymeH2">Blend of simplicity and creativity</h2>
          <p>The work is going be proffesional, simple and creative at the same time. <br /> The project we made would not be too much focused on pretty layout but rather providing the user what they want through the website.</p>
        </div>
        <div className="circle secC">
          <svg className="num" width="243" height="243" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="121.5" cy="121.5" r="119" stroke="#1E1E1E" strokeWidth="5" />
            <path d="M89.3097 167V153.261L121.411 123.538C124.141 120.896 126.43 118.518 128.28 116.405C130.159 114.291 131.582 112.222 132.551 110.196C133.52 108.141 134.004 105.925 134.004 103.547C134.004 100.905 133.402 98.6297 132.199 96.7216C130.995 94.7841 129.351 93.3016 127.267 92.2741C125.183 91.2173 122.82 90.6889 120.178 90.6889C117.418 90.6889 115.011 91.2467 112.956 92.3622C110.901 93.4777 109.316 95.0776 108.2 97.1619C107.085 99.2462 106.527 101.727 106.527 104.604H88.429C88.429 98.7031 89.7647 93.5805 92.4361 89.2358C95.1075 84.8911 98.8504 81.5298 103.665 79.152C108.479 76.7741 114.027 75.5852 120.31 75.5852C126.768 75.5852 132.39 76.7301 137.175 79.0199C141.989 81.2803 145.732 84.4214 148.403 88.4432C151.075 92.465 152.411 97.0739 152.411 102.27C152.411 105.675 151.735 109.036 150.385 112.354C149.064 115.671 146.701 119.355 143.295 123.406C139.89 127.428 135.09 132.257 128.896 137.893L115.73 150.795V151.412H153.599V167H89.3097Z" fill="#FBBD06" />
          </svg>

        </div>
      </div>
        <div className="whyme">
          <div className="whyme-text firstT">
            <h2 className="whymeH2">Not just a web designer</h2>
            <p>The secondry skills would complement all of our projects. <br /> I keep in mind SEO, Mobile responsiveness, Quality copywriting, Digital marketing, A/B testing, brand strategy and much more. </p>
          </div>
          <div className="circle firstC">
            <svg className="num" width="243" height="243" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="121.5" cy="121.5" r="119" stroke="#1E1E1E" strokeWidth="5" />
              <path d="M120.643 166.233C114.068 166.233 108.211 165.103 103.074 162.842C97.9659 160.553 93.9295 157.411 90.9645 153.419C88.0289 149.397 86.517 144.759 86.429 139.504H105.628C105.745 141.706 106.464 143.643 107.786 145.317C109.136 146.961 110.927 148.238 113.158 149.148C115.389 150.058 117.899 150.513 120.688 150.513C123.594 150.513 126.162 149.999 128.393 148.972C130.625 147.944 132.371 146.52 133.634 144.7C134.896 142.88 135.527 140.781 135.527 138.403C135.527 135.996 134.852 133.868 133.501 132.018C132.18 130.14 130.272 128.672 127.777 127.615C125.311 126.558 122.375 126.03 118.97 126.03H110.56V112.027H118.97C121.847 112.027 124.386 111.528 126.588 110.53C128.819 109.532 130.551 108.152 131.784 106.391C133.017 104.6 133.634 102.516 133.634 100.138C133.634 97.8774 133.09 95.8958 132.004 94.1932C130.947 92.4612 129.45 91.1108 127.513 90.142C125.605 89.1733 123.374 88.6889 120.82 88.6889C118.236 88.6889 115.873 89.1586 113.73 90.098C111.587 91.008 109.87 92.3144 108.578 94.017C107.286 95.7197 106.597 97.7159 106.509 100.006H88.2344C88.3224 94.8097 89.8049 90.2301 92.6818 86.267C95.5587 82.304 99.4337 79.2069 104.307 76.9758C109.209 74.7154 114.743 73.5852 120.908 73.5852C127.131 73.5852 132.577 74.7154 137.244 76.9758C141.912 79.2363 145.537 82.2893 148.121 86.1349C150.733 89.9512 152.025 94.2372 151.996 98.9929C152.025 104.042 150.455 108.255 147.284 111.631C144.143 115.007 140.048 117.15 134.999 118.06V118.764C141.633 119.616 146.682 121.92 150.146 125.678C153.64 129.406 155.372 134.073 155.342 139.68C155.372 144.818 153.889 149.383 150.895 153.375C147.93 157.367 143.835 160.509 138.609 162.798C133.384 165.088 127.395 166.233 120.643 166.233Z" fill="#FBBD06" />
            </svg>
          </div>
        </div>
        <div className="whyme">
          <div className="whyme-text secT">
            <h2 className="whymeH2">Going beyond design</h2>
            <p>After the final delivery of the project you can test your design through any method.<br />I will try my to provide whatever can i to improve the design and give feedback about what exactly you will need to fix the issue.</p>
          </div>
          <div className="circle secC">
            <svg className="num" width="243" height="243" viewBox="0 0 243 243" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="121.5" cy="121.5" r="119" stroke="#1E1E1E" strokeWidth="5" />
              <path d="M84.9446 151.148V136.132L122.594 76.8182H135.54V97.6023H127.878L104.143 135.163V135.868H157.645V151.148H84.9446ZM128.23 167V146.568L128.582 139.919V76.8182H146.46V167H128.23Z" fill="#FBBD06" />
            </svg>
          </div>
        </div>
      </div>
      <Process />
      {/* <div className="pricing">
        <h1>What about <span className="span">pricing</span></h1>
        <p>You must have heard this a lot but pricing heavily depends on the kind of project we work on. Project we work on is anywhere between <strong>$250 to $5,000</strong>. </p>
        <p className='whymeP'>We manily consider two factors</p>
        <p className='pricingPoint'> 1. How big the project is <br />2. Want both design and development or just one</p>
        <p></p>
      </div> */}
      <Contact />
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home