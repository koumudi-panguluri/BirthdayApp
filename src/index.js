import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './service-worker'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.register();