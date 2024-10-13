import { useLocation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';

import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  console.log(clientSecret);

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
