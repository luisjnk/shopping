import React from 'react';
import "./ProductCard.scss"

function ProductCard() {
  return (
    <div className="card">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>ß
      </div>
    </div>
  );
}

export default ProductCard;
