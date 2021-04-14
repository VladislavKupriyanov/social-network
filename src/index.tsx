import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import './index.css';
import { state } from './redux/state';

ReactDOM.render(
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
);