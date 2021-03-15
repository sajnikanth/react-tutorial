import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

var app = (
    <div>
        <App name='Sajnikanth' country='India'/>
        <App name='Xiaojie' country='China'/>
    </div>


);

ReactDOM.render(app, document.querySelector('#root'));