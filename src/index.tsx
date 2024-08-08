import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {store} from './redux';
import  {Provider} from 'react-redux';
import {App} from "./components/App"

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
    <Provider store={store}>
        <App  />
        </Provider>

);

