import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './components/Context/Context';
import ScrollIntoView from './scrollToTop';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
   
 <ProductProvider>
    <BrowserRouter>
  <ScrollIntoView>
 < Auth0Provider
    domain='dev-qeuzljs8.us.auth0.com'
    clientId='AHsXHXqhsO2IFeJxPOfBDYgiHWwSVBo2'
    redirectUri='http://localhost:3000/TodoList'>
      
     <App />
     </Auth0Provider>
  </ScrollIntoView>

     
   
   </BrowserRouter>

 </ProductProvider>, 


 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

