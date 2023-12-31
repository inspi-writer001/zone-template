import { Helmet } from 'react-helmet-async';

import TravelCheckoutView from 'src/sections/_travel/view/travel-checkout-view';

// ----------------------------------------------------------------------

export default function TravelCheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <TravelCheckoutView />
    </>
  );
}
