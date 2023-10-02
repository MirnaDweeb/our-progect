import React from 'react'; //ecma script
import ReactDOM from 'react-dom/client';
import './index.css';//all css style of the website
import App from './App';
import reportWebVitals from './reportWebVitals';//it is in charge of performance of our application it cashes so that it doesnot refresh and restart again 
//it saves time

const root = ReactDOM.createRoot(document.getElementById('root'));//root for the whole application 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//calling function
