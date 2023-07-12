import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { CSSReset, ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    100: "#ffbb00",
    200: "#111111"
  }
}

const fonts = {
  body: `'Roboto Mono', monospace`,
  body100: "'Roboto Mono', monospace",
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const theme = extendTheme({ colors, fonts, breakpoints })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraBaseProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraBaseProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
