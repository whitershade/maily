import React, { PureComponent } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payments extends PureComponent {
  render() {
    return (
      <StripeCheckout
        name="Maily"
        amount={500}
        description="$5 for 5 mails credits"
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}
