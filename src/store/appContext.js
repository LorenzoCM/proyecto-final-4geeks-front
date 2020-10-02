import React, { useState, useEffect } from 'react';
import getState from './flux';
import * as moment from 'moment'
import { contains } from 'jquery';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: updateStore => setState({
        store: Object.assign(state.store, updateStore),
        actions: { ...state.actions }
      })
    }));
    let date = new Date()
    const APIdate = moment(date).format('DD-MM-YYYY')
    console.log(APIdate)

    useEffect(() => {
      state.actions.getCategories();
      state.actions.isAuthenticated();
      state.actions.updateCart();
      state.actions.cartNumActualize();
      state.actions.getConversionValue(APIdate);
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    )

  }
  return StoreWrapper;
}

export default injectContext;