import React, { useState, useEffect } from 'react';

const ProductsDisplay = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/phones')
      .then(response => response.json())
      .then(data => setPhones(data))
      .catch(error => console.error('Error fetching phones:', error));
  }, []);

  return (
    <section className="products-display">
      <h3>Produits Vedettes</h3>
      <ul>
        {phones.map(phone => (
          <li key={phone.id}>
            <h4>{phone.name}</h4>
            <p>Prix: {phone.price}</p>
            <p>Description: {phone.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsDisplay;
