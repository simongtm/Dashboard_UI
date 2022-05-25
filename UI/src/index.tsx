import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import { store } from './Store/Root/ConfigureStore';
import NavRouter from './Router/NavRouter';
import ErrorBoundary from './ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
    <NavRouter />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
