import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearSelectedProduct } from '../../../redux/productSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch]);

  if (!selectedProduct || selectedProduct.id !== id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{selectedProduct.title}</h2>
      <div className="product-images">
        {selectedProduct.images.map((image, index) => (
          <img key={index} src={image} alt={`${selectedProduct.title} ${index + 1}`} />
        ))}
      </div>
      <p>Price: {selectedProduct.price} ₼</p>
      <p>Color: {selectedProduct.color}</p>
      <p>Screen: {selectedProduct.screen}"</p>
      <p>RAM: {selectedProduct.ram}</p>
      <p>ROM: {selectedProduct.rom}</p>
      <p>CPU: {selectedProduct.cpu}</p>
      <p>Main Camera: {selectedProduct.maincamera}</p>
    </div>
  );
};

export default ProductDetails;
