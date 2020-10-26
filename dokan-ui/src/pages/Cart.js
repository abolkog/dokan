import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import CartDetail from '../components/CartDetail';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  return (
    <>
      <CartDetail />
      <div>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          onClick={() => history.push('/checkout')}
          disabled={cart.cartTotal <= 0 || cart.items.length === 0}
        >
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;
