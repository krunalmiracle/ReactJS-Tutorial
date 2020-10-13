import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App created in Src as a single component
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();