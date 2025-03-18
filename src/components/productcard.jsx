// write product card here
// write product card here
import React from 'react';
import ViewProductButton from '../components/button';

const ProductCard = () => {
  const productImage = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFUeEZnNlNyc3llcmZiYmQ5TGppeHJ3&traceId=1'
  const productName = 'Iphone 16promax';
  const productPrice = 'Rs. 144900.00';

  return (
    <div className="product_card">
      <img src={productImage} alt={productName} className="product_image" />

      <h3 className="product_name">{productName}</h3>

      <p className="product_price">{productPrice}</p>

      <ViewProductButton />
    </div>
  );
};

export default ProductCard;