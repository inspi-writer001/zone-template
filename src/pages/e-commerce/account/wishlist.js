import { Helmet } from 'react-helmet-async';

import EcommerceAccountWishlistView from 'src/sections/_ecommerce/view/ecommerce-account-wishlist-view';

// ----------------------------------------------------------------------

export default function EcommerceAccountWishlistPage() {
  return (
    <>
      <Helmet>
        <title>Account: Wishlist</title>
      </Helmet>

      <EcommerceAccountWishlistView />
    </>
  );
}
