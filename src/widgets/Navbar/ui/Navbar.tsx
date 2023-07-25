import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [authModal, setAuthModal] = useState(false);
    const toggleModalHandler = () => {
        setAuthModal((prev) => !prev);
    };

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={toggleModalHandler}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={authModal}
                onClose={toggleModalHandler}
            // eslint-disable-next-line i18next/no-literal-string
            >
                KKK
            </Modal>
        </div>
    );
};
