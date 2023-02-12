import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



export default function App() {
const {theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {} , [theme])}>
          <Navbar/>
          <AppRouter />
          <button onClick={toggleTheme}>Тема</button>
         </div>
    )
}