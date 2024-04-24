import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
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


