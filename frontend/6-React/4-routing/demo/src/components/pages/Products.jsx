import React from 'react';

const Product = () => {

  return (
    <>
      <h1>Products Page</h1>

      <div class="product">
            <h2>Product 1</h2>
            <p class="price">Price: $150</p>
            <p class="location">Location: Venue 1</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="product">
            <h2>Product 2</h2>
            <p class="price">Price: $299</p>
            <p class="location">Location: Venue 2</p>
            <p>Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="product">
            <h2>Product 3</h2>
            <p class="price">Price: $400</p>
            <p class="location">Location: Venue 3</p>
            <p>Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>

    </>
  )

}

export default Product;