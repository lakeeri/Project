import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleHandler = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={toggleHandler}>toggle</button>
            <div className={cls.switchers}>
              <ThemeSwitcher />
            </div>
        </div>
 );
}