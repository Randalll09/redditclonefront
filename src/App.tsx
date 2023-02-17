import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './router/Login';
import Main from './router/Main';
import MakeUser from './router/MakeUser';
import Axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Main /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <MakeUser /> },
    ],
  },
]);

function App() {
  Axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
