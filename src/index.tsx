// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
);
