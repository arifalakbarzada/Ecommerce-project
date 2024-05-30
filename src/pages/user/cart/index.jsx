// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../../redux/cartSlice';

// function Cart() {
//   const cartItems = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>The Cart is empty.</p>
//       ) : (
//         <div className='cart'>
//           {cartItems.map(item => {
//             console.log(item);
//             return(
//             <div className='cart-item' key={item.id}>
//               <img src={item.image} alt={item.title} />
//               <div className="name">
//                 {item.title} - {item.price} ₼ - {item.quantity}
//               </div>
//               {/* <img src="" alt="" /> */}
//               <div className="remove">
//                 <button onClick={() => handleRemoveFromCart(item.id)}>X</button>
//               </div>
//               <div className="plus">
//                 <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
//               </div>
//               <div className="minus">
//                 <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
//               </div>

//             </div>
//           )})}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../../redux/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.images[0]} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.price} ₼</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="cart-item-remove">Kaldır</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

