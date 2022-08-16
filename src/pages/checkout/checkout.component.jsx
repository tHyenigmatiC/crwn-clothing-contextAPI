import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const CheckoutPage = () => {


  const { cartItems, totalPrice } = useContext(CartContext);

  // NOTE: Please research whether this is a good case for the use of useMemo hook
  // this calculation can be done in provider also using same useMemo hook
  // const total = useMemo( () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity, 0
  //   );
  // }, [cartItems]);

  // const total = cartItems.reduce( (total, item) => total + item.price * item.quantity, 0);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${totalPrice}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
}

export default CheckoutPage;
