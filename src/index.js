import React from 'react'; // to use JSX
import ReactDOM from 'react-dom/client';
import App from './App';


// let container = document.getElementById('root')

// // ReactDOM.render(h1, root) no longer supported
// let root=  ReactDOM.createRoot(container);
// root.render(h1)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
