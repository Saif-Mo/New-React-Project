import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import camb  from './Layer 2.png';


function Cont() {
  return (
    <>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="container">

<section 
  className="gradient-bg col-11" 
  style={{
    textAlign: "center",
    padding: "20px",
    color: "white",
    borderRadius: "10px",
    margin: "20px auto",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  }}
>
  <img className='col-5'
    src={camb} 
    alt="Cameras" 
    style={{
      borderRadius: "10px",
      height: "380px",
      position: "absolute",
      left: "20px", 
    }} 
  />
  <div className='col-6'  style={{ textAlign: "center",marginRight:'-230px', marginTop: "-20px", marginBottom: "60px" }}>
  <h2 style={{fontSize:'50px'}}>Your trusted partner</h2>
  <p style={{fontSize:'30px'}}>Keep it safe</p>
</div>
</section>



</div>
</>

  )
}

export default Cont