import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import MovieList from './pages/MovieList';
import Detail from './pages/Detail';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movieList' element={<MovieList />} />
        <Route path='movie/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
