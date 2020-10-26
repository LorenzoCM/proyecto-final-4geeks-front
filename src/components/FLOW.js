import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const FlowPayment = ({ order }) => {
  const FlowConfig = {
    baseUrl: 'http://localhost:3000',
    successUrl: 'http://localhost:3000/success',
    failureUrl: 'http://localhost:3000/failure',
    key: {process.env.REACT_APP_FLOW_SECRET_KEY},
    publicKey: '1F8553D2-733B-42B7-9F25-7CDBB63L52CE',
    email: 'ierrandoneag@gmail.com',
    confirm: myConfirmFunction,
    paymentTypes: 9,
  }
};

const payment = (data, actions) => {
  const payment = {
    transactions: [
      {
        amount: {
          total: order.total,
          currency: PaypalConfig.currency,
        },
        description: "Test buy",
        custom: order.custumer || '',
        item_list: {
          items: order.items
        }
      }
    ],
    note_to_payer: 'Si tienes problemas/dudas, contáctanos a coffee@test.4geeks'
  };
  return actions.payment.create({ payment });
};
const onAuthorize = (data, actions) => {
  return actions.payment.execute()
    .then(response => {
      console.log(response);
      alert(`Pago procesado exitosamente, ID: ${response.id}`);
    })
    .catch(error => {
      console.log(error);
      alert('Ocurrió un error al procesar el pago')
    });
};
const onError = error => {
  console.log(error);
  alert('El pago no pudo realizarse');
};
const onCancel = (data, actions) => {
  alert('No se realizó el pago, cancelado por el usuario')
};

return (
  <PaypalButton
    env={PaypalConfig.env}
    client={PaypalConfig.client}
    payment={(data, actions) => payment(data, actions)}
    onAuthorize={(data, actions) => onAuthorize(data, actions)}
    onCancel={(data, actions) => onCancel(data, actions)}
    onError={(error) => onError(error)}
    style={PaypalConfig.style}
    commit
  />
);
};

export default PaypalCheckoutButton;