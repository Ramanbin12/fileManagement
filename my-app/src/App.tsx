import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentRoute from './routes/ComponentRoutes';

function App() {
  return (
    <div className="App">
          {/* <HomePage/> */}
<ComponentRoute/>
    </div>
  );
}

export default App;
