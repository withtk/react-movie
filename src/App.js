import './styles/App.css';
// import 'antd/dist/antd.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/home/Home';
import Main from './pages/Main';
import Menu2 from './menu/menu2';

const MovieList = lazy(() => import('./pages/movie/MovieList'));
const Home = lazy(() => import('./pages/home/Home'));
const TTTest = lazy(() => import('./test/TTTest'));
const Login = lazy(() => import('./pages/login/Login'));
const TestInput = lazy(() => import('./test/TestInput'));
const MMO = lazy(() => import('./pages/modal'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Main />} />

          <Route path={process.env.PUBLIC_URL + '/home'} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + '/menu2'} element={<Menu2 />} />
          <Route path={process.env.PUBLIC_URL + '/TTT'} element={<TTTest />} />
          <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
          <Route path={process.env.PUBLIC_URL + '/modal'} element={<MMO />} />
          <Route path={process.env.PUBLIC_URL + '/TestInput'} element={<TestInput />} />
          <Route path={process.env.PUBLIC_URL + '/movieList'} element={<MovieList />} />
          <Route path={process.env.PUBLIC_URL + '/movie/:id'} element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
