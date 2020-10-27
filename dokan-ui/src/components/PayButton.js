import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayButton = ({ total, onSuccess }) => {
  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApproveOrder = async (data, actions) => {
    await actions.order.capture();
    onSuccess();
  };

  const onUserCancel = () => {
    console.log('User cancelled');
  };

  return (
    <PayPalButton
      createOrder={onCreateOrder}
      onApprove={onApproveOrder}
      onCancel={onUserCancel}
    />
  );
};

PayButton.propTypes = {
  total: PropTypes.string.isRequired,
};

export default PayButton;
