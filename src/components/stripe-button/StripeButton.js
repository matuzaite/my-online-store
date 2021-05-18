import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IrJfwAR6QZFkLIaN51Q5Gy4k7s5AKu55iR3mXoIWdGCqXPS7FQnwiRRI0M6xVKnuqMUIAnGknyhbGqH7uZTZd3w00tiBq1u1n';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  }

  return (
    <StripeCheckOut
      label='Pay Now 💳'
      name='Urban Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://flaticon.com/png/512/3884/3884465.png?token=exp=1621072426~hmac=9090e0cc314cc921d02c8d16c8a49f1f'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeButton;