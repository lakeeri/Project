import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';



export default function App() {
const {theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {} , [theme])}>
          <button onClick={toggleTheme}>Тема</button>
           <Link to="/">Главная страница</Link>
           <Link to="/about">Информация о сайте</Link>
           <Suspense fallback={<div>Loading...</div>} >
             <Routes>
               <Route path={'/'} element={<MainPage />} />
               <Route path={'/about'} element={<AboutPage />} />
             </Routes>
            </Suspense>  

        </div>
    )
}