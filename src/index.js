import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { chakraProvider}  from '@chakra-ui/react';


ReactDOM.render(
  <React.StrictMode>
    <chakraProvider>
    <App />
    </chakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


