import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home'
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
