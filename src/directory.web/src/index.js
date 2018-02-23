import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from 'utils/registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './assets/styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();