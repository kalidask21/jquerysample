import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './CMS/Menu/Menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Menu />, document.getElementById('root'));
registerServiceWorker();
