import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from 'store';
import CssBaseline from '@material-ui/core/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <CssBaseline/>
    <App />
    </Provider>
  </React.StrictMode>
);

//1. turtle
let turtlePosition = 0; 
let day = 0;
while (true) {
  day+=1;
  if (turtlePosition+50 >= 100) {
    break;
  } else {
    turtlePosition+=20;
  }
}
console.log(day);

//2. handshake counter
function recursiveCounter(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x+=1;
  }
}

console.log(recursiveCounter(2, 10)); 