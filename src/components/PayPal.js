import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { useHistory } from 'react-router-dom';

const PaypalCheckoutButton = ({ order }) => {
  const PaypalConfig = {
    currency: 'USD',
    env: 'sandbox',
    client: {
      sandbox: 'Abcn0mfXWCDd7POS_qT_QIUjdDKDCh5030va8KoX6BF5OQqcNe2dz3tnOSN7B2yFOn1uqmXr1cA9xEvh',
      production: '',
    },
    style: {
      layout: 'vertical',
      color: 'black',
      shape: 'rect',
      label: 'paypal'
    }
  };
  
  let history = useHistory();

  const PaypalButton = paypal.Button.driver('react', { React, ReactDOM })

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
      history.push("/success")
    })
    .catch(error=>{
      console.log(error);
      alert('Ocurrió un error al procesar el pago')
      history.push("/error")
    });
  };
  const onError = error =>{
    console.log(error);
    alert('El pago no pudo realizarse');
    history.push("/error")
  };
  const onCancel = (data, actions) => {
    alert('No se realizó el pago, cancelado por el usuario')
    history.push("/error")
  };

  return (
    <PaypalButton 
    env={PaypalConfig.env}
    client={PaypalConfig.client}
    payment={(data, actions)=>payment(data,actions)}
    onAuthorize={(data, actions)=>onAuthorize(data,actions)}
    onCancel={(data, actions)=>onCancel(data,actions)}
    onError={(error)=>onError(error)}
    style={PaypalConfig.style}
    commit
    />
    );
};

export default PaypalCheckoutButton;