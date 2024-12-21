import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Third from './rank3.jpg';
import Second from './rank2.jpg';
import First from './download.jpg';
import Fir from './first.png';
import thir from './third.svg';
import sec from './Second.svg'

function Customer() {
  const customers = [
    { rank: 2, title: 'The Second:Mrs/Sara', color: '#C0C0C0', image: Third, medal: sec },
    { rank: 1, title: 'The First:Mrs/Alexie', color: '#FFD999', image: Second, medal: Fir },
    { rank: 3, title: 'The Third:Mr/Tony', color: '#CD7F32', image: First, medal: thir },
  ];

  return (
    <section className="col-12" style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
      <center>
        <h2 style={{ fontSize: '50px' }} className="col-6">Our Top Customers</h2>
      </center>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {customers.map((customer, index) => (
          <div
            className="card "
            style={{ width: "18rem", backgroundColor: customer.color }}
            key={index}
          >
            <img src={customer.image} className="card-img-top" alt={customer.title} />
            <hr />
            <div className="card-body">
              <p className="card-text fw-bolder" style={{ fontSize: '30px' }}>Rank: {customer.rank}</p>
              <p className="card-text fw-bolder"  style={{ fontSize: '25px' }}>{customer.title}</p>
              {customer.medal && (
                <img
                  src={customer.medal}
                  alt="Medal"
                  style={{ width: '70px',height:'90px', marginTop: '3px' }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Customer;
