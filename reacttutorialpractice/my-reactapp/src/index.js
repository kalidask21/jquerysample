
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore }  from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/Reducer'
import registerServiceWorker from './registerServiceWorker';

const reduxStore = createStore(reducer)

ReactDOM.render(<Provider store={reduxStore} ><App apptitle="Dictionary App By Redux"/></Provider>, document.getElementById('root'));
registerServiceWorker();
