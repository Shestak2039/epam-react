import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './App';

import './style.scss';
import { loadFilmsAsync } from './store/actions/film-actions';

store.dispatch<any>(loadFilmsAsync());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
