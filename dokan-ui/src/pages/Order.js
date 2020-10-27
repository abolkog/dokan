import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CartDetail from '../components/CartDetail';
import { getOrder, patchOrder } from '../services/api';
import PayButton from '../components/PayButton';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const Order = () => {
  const [refresh, setRefresh] = useState(0);
  const [orderDetails, setOrderDetails] = useState(null);
  const { code } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOrder(code);
        setOrderDetails(result);
      } catch (e) {
        //
      }
    };

    fetchData();
  }, [refresh, code]);

  const handlePaymentSuccess = async () => {
    try {
      await patchOrder(code);
      setRefresh(refresh + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <CartDetail />

      <div className={classes.root}>
        {orderDetails && orderDetails.status !== 'payed' && (
          <PayButton
            total={orderDetails.total}
            onSuccess={handlePaymentSuccess}
          />
        )}
        {orderDetails && orderDetails.status === 'payed' && (
          <div>Thanks. Order is complete</div>
        )}
      </div>
    </div>
  );
};

export default Order;
