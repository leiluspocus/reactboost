import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import Quote from './Quote';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// setInterval(ReactDOM.render(<Tick />, document.getElementById("root")), 1000); 
registerServiceWorker();
