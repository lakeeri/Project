import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';



export default function App() {
const {theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {} , [theme])}>
          <button onClick={toggleTheme}>Тема</button>
           <Link to="/">Главная страница</Link>
           <Link to="/about">Информация о сайте</Link>
           <AppRouter />
         </div>
    )
}