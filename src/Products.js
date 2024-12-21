import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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




function Products() {
  const products = [
    {image:cam1,  title: 'Cam 1',id:1 },
    {image:cam2, title: 'Cam 2',id :2},
    {image:cam3,  title: 'Cam 3',id :3},
    {image:cam4, title: 'Cam 4',id :4},
    {image:cam5, title: 'Cam 5',id :5},
    {image:cam6, title: 'Cam 6',id :6},
    {image:cam7,  title: 'Cam 7',id :7},
    {image:cam8, title: 'Cam 8',id :8},
    {image:cam9, title: 'Cam 9',id :9},
    {image:cam10, title: 'Cam 10',id :10},
    {image:cam11, title: 'Cam 11',id :11},
    {image:cam12, title: 'Cam 12',id :12},


  ];

  return (
    <section
      style={{
        textAlign: 'center',
        padding: '50px',
        background: '#000',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '50px', marginBottom: '30px' }}>The Products</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{background: 'linear-gradient(145deg,rgb(13, 13, 13),rgb(43, 43, 43))',borderRadius: '20px',padding: '20px',width: '253px', textAlign: 'center',boxShadow: '0px 10px 15px rgba(62, 60, 60, 0.3)', transition: 'transform 0.3s, box-shadow 0.3s'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0px 15px 20px rgba(90, 169, 248, 0.47)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 10px 15px rgba(57, 57, 57, 0.3)';
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  borderRadius: '15px',
                  marginBottom: '15px',
                  height: '150px',
                }}
              />
              <h3 style={{ color: 'rgb(255, 255, 255)', fontSize: '20px', margin: '10px 0' }}>
                {product.title}
              </h3>
              <button
                style={{
                  background: 'rgba(90, 169, 248, 0.47)',
                  color: '#000',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(90, 169, 248, 0.47)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(90, 169, 248, 0.47)')}
              >
                Learn More
              </button>
            </div>
          </Link>
        ))}
        </div>
    </section>
  );
}

export default Products;
