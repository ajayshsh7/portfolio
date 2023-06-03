import React from 'react';
import { useState } from 'react';
import './process.css';

const Process = () => {
  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setselected(null);
    } else {
      setselected(i);
    }
  };

  return (
    <div className="process">
      <h1>Go Through My <span className='span'>Process</span></h1>
      <div className="wrapper">
        <div className="accordian">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.process}</h2>
                <span className='sign'>
                  <svg className='minus' width="54" height="6" viewBox="0 0 54 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H51" stroke="black" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
              {selected === i && (
                <div className="desc">{item.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






const data = [
    {
        process: 'Extensive brand research',
        desc: 'Defining goals of the brand, what is vision and mission for the brand, What is the most important thing for your business and finding your target audience.'
    },
    {
        process: 'Target audience research',
        desc: 'Demographics and psychographic of target audience. Where they live, what is there gender, their income, what they belive, part of their culture etc.'
    },
    {
        process: 'Visual identity',
        desc: 'Defining the look and feel of the website according to the target audience. Giving directions to brand that align with the vision and mission of the brand.'
    },
    {
        process: 'Assets and content',
        desc: 'All the assets like graphics, imagery, 3d models, custom mockups for branding and content for the website. '
    },
    {
        process: 'Designing phase',
        desc: 'Actuall designing starts here where we build prototypes and do wireframing for the website. Building component that is going to use for the website.'
    },
    {
        process: 'Development phase',
        desc: 'Both no code tools and custom websites can be implemented depending on the requirement and budget which we decide to build the website.'
    },
]

export default Process