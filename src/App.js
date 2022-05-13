import './App.css';
import { BrowserRoute, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';


function App() {
  return (
    <BrowserRoute>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRoute> 
  );
}

export default App;
