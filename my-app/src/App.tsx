import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentRoute from './routes/ComponentRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
          {/* <HomePage/> */}
<ComponentRoute/>
<ToastContainer/>
    </div>
  );
}

export default App;
