import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



export default function App() {
const {theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {} , [theme])}>
          <button onClick={toggleTheme}>Тема</button>
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