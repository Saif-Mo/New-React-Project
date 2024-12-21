import React from 'react';
import { useParams } from 'react-router-dom';
import cam1 from './cam1.webp'
import cam2 from './cam2.webp'
import cam3 from './cam3.webp'
import cam4 from './cam4.webp'
import cam5 from './cam5.jpg'
import cam6 from './cam6.webp'
import cam7 from './cam7.jpg'
import cam8 from './cam8.jpg'
import cam9 from './cam9.jpg'
import cam10 from './cam11.jpg'
import cam12 from './cam12.jpg'
import cam11 from './cam10.jpg'


function ProductDetail() {
  const { id } = useParams();
  const productDetails = {
   1:  {image:cam1,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'9/10' , title: 'Cam 1'},
    2: {image:cam2,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'6/10', title: 'Cam 2'},
    3:{image:cam3,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'5.5/10',  title: 'Cam 3'},
    4:{image:cam4,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'4.5/10', title: 'Cam 4'},
   5:{image:cam5,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'8/10' ,title: 'Cam 5'},
    6:{image:cam6,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'9/10' ,title: 'Cam 6'},
    7:{image:cam7,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'9.5/10'  ,title: 'Cam 7'},
    8:{image:cam8,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'8.8/10' ,title: 'Cam 8'},
    9:{image:cam9,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'7.9/10' ,title: 'Cam 9'},
    10:{image:cam10,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'9.2/10', title: 'Cam 10'},
    11:{image:cam11,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'10/10', title: 'Cam 11'},
    12:{image:cam12,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',rate:'3/10', title: 'Cam 12'},}

  const product = productDetails[id];

  return (
    <>
    <center>
    <div style={{ padding: '20px', color: 'white', background: '#000' }}>
 
 <div className="card col-8" style={{width: "18rem;",height:'520px', backgroundColor:'rgb(30, 99, 168)'}}>
  <img src={product.image} className="card-img-top" style={{height:'320px'}} alt="..." />
  <div className="card-body">
    <p className="card-text" style={{fontSize:'30px',color:'white'}}><center>{product.title}</center></p>
    <h4 style={{color:'white'}}><span style={{fontSize:'30px',color:'white'}} >About the description:<br></br></span> {product.description}</h4>
  </div>
</div>
<hr style={{color:'white'}}></hr>

 <center></center>
    </div></center>
    <br></br>
    <br></br>

    <h2 style={{color:'white',marginLeft:'20px'}}>Rate: {product.rate}</h2>
</>

  );
}

export default ProductDetail;
