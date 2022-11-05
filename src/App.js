import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home.js';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
