import './App.css';
import 'antd/dist/antd.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Main from './pages/Main';
import Menu2 from './menu/menu2'; 

const MovieList = lazy(() => import('./pages/MovieList'));
const Detail = lazy(() => import('./pages/Home'));
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
          <Route path='movie/:id' element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
