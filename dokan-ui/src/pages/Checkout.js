import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Button, makeStyles } from '@material-ui/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import CartDetail from '../components/CartDetail';
import PersonalDetailForm from '../components/PersonaDetailForm';
import { CartContext } from '../contexts/CartContext';
import { createOrder, fetchProducts } from '../services/api';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const Checkout = () => {
  const history = useHistory();
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const fomrik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: async values => {
      const { items = [] } = cart;
      const productIds = items.map(item => `id_in=${item.id}`);
      const query = productIds.join('&');
      try {
        const products = await fetchProducts(query);
        let total = 0;
        items.forEach(item => {
          const product = products.find(p => p.id === item.id);
          total += item.qty * product.price;
        });

        const order = await createOrder({
          ...values,
          total: `${total}`,
        });

        history.push(`/orders/${order.code}`);
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { getFieldProps, errors, touched } = fomrik;
  return (
    <div>
      <CartDetail />
      <PersonalDetailForm
        getFieldProps={getFieldProps}
        errors={errors}
        touched={touched}
      />
      <div className={classes.root}>
        <Button
          variant='contained'
          color='primary'
          onClick={fomrik.handleSubmit}
          fullWidth
          disabled={cart.cartTotal <= 0 || cart.items.length === 0}
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
