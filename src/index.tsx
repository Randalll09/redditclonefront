import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }
 a,span,p,h1,h2{
  font-family: ${({ theme }) => theme.font};
 }
 a{
   color: inherit;
   text-decoration: none;
 }
 li{
   list-style: none;
 }
 button{
   border: none;
   outline: none;
    cursor: pointer;
 }
 input{
   border: none;
   outline: none;
   &:focus{
     outline: none;
   }
}
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
