import { ChakraProvider, extendTheme } from '@chakra-ui/react';
//ChakraProvider - context provider from Chakra Ui. It wraps our app and gives it access to all of Chakra's design system components
//extendTheme - allows us to customize Chakra's default theme (like colors, fonts, etc.) to match our design
import { ColorModeScript } from '@chakra-ui/react';
// ensures that the correct color mode is loaded immediately on page load, preventing a flash of wrong mode.
//syncs color mode with what's stored in localStorage
import React from 'react';
//required to use JSX syntax. required to render React elements
import ReactDOM from 'react-dom/client';
//used to render root component (App) into the actual DOM.
import './index.css';
//imports styles
import App from './App.tsx';
//imports the root React component where whole app layout lives. 

const theme = extendTheme({
  config: {
    initialColorMode: 'light', //the page starts in light mode
    useSystemColorMode: false, //ignores the user's system preference
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#4B0000' : 'wheat', //dark mode: deep red background, light mode: wheat background
        color: props.colorMode === 'dark' ? '#FFD700' : '#4B0000',
      },
    }),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 
//gets the HTML element with id=root from public/index.html file
//ReactDOM.createRoot() initializes a new React root 
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
//render() mounts entire React app into the real DOM (inside div#root)
