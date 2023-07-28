import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.button}>
                {t('Войти')}
            </Button>
        </div>
    );
};
