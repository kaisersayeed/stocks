import React from 'react'
import { render } from 'react-dom'
import {store} from './redux/store'
import { Provider } from 'react-redux'
import './../style/style.css';
import App from './components/App'

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(".container")
);

