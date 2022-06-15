import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
=======
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


>>>>>>> 0cbba1e651b69bda04b66e2593d6276fa3db5943
