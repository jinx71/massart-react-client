import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <RouterProvider router={router}>  </RouterProvider>
  );
}

export default App;