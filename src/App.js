import './styles/App.css';
// import 'antd/dist/antd.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './pages/home/Home';
import Main from './pages/Main';
import Menu2 from './menu/menu2';
import {ModalProvider} from "./pages/modal/ModalContext";

const MovieList = lazy(() => import('./pages/movie/MovieList'));
const Home = lazy(() => import('./pages/home/Home'));
const TTTest = lazy(() => import('./test/TTTest'));
const Login = lazy(() => import('./pages/login/Login'));
const TestInput = lazy(() => import('./test/TestInput'));
const MainComponent = lazy(() => import('./pages/modal/MainComponent'));

function App() {
    return (
        <ModalProvider>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path={process.env.PUBLIC_URL + '/'} element={<Main/>}/>

                        <Route path={process.env.PUBLIC_URL + '/home'} element={<Home/>}/>
                        <Route path={process.env.PUBLIC_URL + '/menu2'} element={<Menu2/>}/>
                        <Route path={process.env.PUBLIC_URL + '/TTT'} element={<TTTest/>}/>
                        <Route path={process.env.PUBLIC_URL + '/login'} element={<Login/>}/>
                        <Route path={process.env.PUBLIC_URL + '/test2'} element={<MainComponent/>}/>
                        <Route path={process.env.PUBLIC_URL + '/TestInput'} element={<TestInput/>}/>
                        <Route path={process.env.PUBLIC_URL + '/movieList'} element={<MovieList/>}/>
                        <Route path={process.env.PUBLIC_URL + '/movie/:id'} element={<Home/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ModalProvider>

    );
}

export default App;
