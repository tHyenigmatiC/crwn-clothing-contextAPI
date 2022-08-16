import React, { useContext } from 'react';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../providers/cart/cart.provider';

import withRouter from '../with-router/withRouter.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({  dispatch, navigate }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
};

export default withRouter(CartDropdown);
