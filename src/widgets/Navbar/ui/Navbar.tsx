import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { AuthModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [authModal, setAuthModal] = useState(false);
    const openAuthHandler = () => {
        setAuthModal(true);
    };
    const closeAuthHandler = () => {
        setAuthModal(false);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={openAuthHandler}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <AuthModal
                isOpen={authModal}
                onClose={closeAuthHandler}
            />
        </div>
    );
};
