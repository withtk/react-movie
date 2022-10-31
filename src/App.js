import './App.css';
import 'antd/dist/antd.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home/Home';
import Main from './pages/Main';
import Menu2 from './menu/menu2'; 

const MovieList = lazy(() => import('./pages/movie/MovieList'));
const Home = lazy(() => import('./pages/home/Home'));
const TTTest = lazy(() => import('./TTTest'));
const Login = lazy(() => import('./pages/login/Login'));
const TestInput = lazy(() => import('./test/TestInput'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='home' element={<Home />} /> 
          <Route path='menu2' element={<Menu2 />} />
          <Route path='TTT' element={<TTTest />} />
          <Route path='login' element={<Login />} />
          <Route path='TestInput' element={<TestInput />} />
          <Route path='movieList' element={<MovieList />} />
          <Route path='movie/:id' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
