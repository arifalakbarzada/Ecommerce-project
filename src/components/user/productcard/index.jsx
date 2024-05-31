import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { BsCartPlusFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaCodeCompare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function ProductCard({ id, title, images, price, color, ram, rom, cpu, screen }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, images, price }));
  };

  return (
    <div className='product'>
      <div className="icons">
        <MdFavoriteBorder />
        <BsCartPlusFill onClick={handleAddToCart} />
        <FaCodeCompare />
      </div>
      <Link to={`/${id}`}>
        <img src={images[0]} alt={title} />
      </Link>
      <h3 title={title}>{title} {ram}/{rom} {color}</h3>
      <p className='discount-price'>{Number(price.split(".").join("").replace(",", ".")) + 150} ₼</p>
      <p className='price'>{price.split(".").join("").replace(",", ".")} ₼</p>
    </div>
  );
}

export default ProductCard;
