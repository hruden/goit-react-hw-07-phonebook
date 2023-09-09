import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { GlobalContext } from 'stateContext/GlobalContext';
import { Provider } from 'react-redux';
import { persistor, store, }  from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
  {/* <GlobalContext> */}
    <App />
  {/* </GlobalContext> */}
  {/* </PersistGate> */}
  </Provider>
);
