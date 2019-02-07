import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import history from "./history.js";

import App from './components/App';
//import sClasses from './style/style.scss';


render(
   <Router history={history}><App /></Router>,document.getElementById('root')
)

module.hot.accept(); // browser doesn't reload
