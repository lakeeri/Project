import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';



export default function App() {

    return (
        <div className='app'>
           <Link to="/">Главная страница</Link>
           <Link to="/about">Информация о сайте</Link>
           <Suspense fallback={<div>Loading...</div>} >
             <Routes>
               <Route path={'/'} element={<MainPageAsync />} />
               <Route path={'/about'} element={<AboutPageAsync />} />
             </Routes>
            </Suspense>  

        </div>
    )
}