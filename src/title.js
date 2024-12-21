import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function InfoSection() {
  const sections = [
    { title: 'Hello', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    { title: 'About us', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    { title: 'Offers', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  ];

  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', borderBottom: '1px solid white', color:"white" }}>
      {sections.map((section, index) => (
        <div className='col-4' key={index} style={{ maxWidth: '200px' }}>
          <h2 className='col-4' style={{fontSize:'40px'}}>{section.title}</h2>
          <p style={{fontSize:'15px'}}>{section.text}</p>
        </div>
      ))}
    </section>
  );
}

export default InfoSection;
