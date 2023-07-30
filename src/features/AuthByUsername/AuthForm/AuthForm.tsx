import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DinamicModuleLoader,
    RedusersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import cls from './AuthForm.module.scss';
import { authActions, authReducer } from '../model/slice/authSlice';
import { authByUsername } from '../model/services/authByUsername';
import { getPassword } from '../model/selectors/getPassword/getPassword';
import { getUsername } from '../model/selectors/getUsername/getUsername';
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../model/selectors/getError/getError';

interface AuthFormProps {
    className?: string
}
const initialReducers: RedusersList = {
    auth: authReducer,
};

const AuthForm = memo((props: AuthFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const password = useSelector(getPassword);
    const username = useSelector(getUsername);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(authActions.setPassword(value));
    }, [dispatch]);

    const onClickAuth = useCallback(() => {
        dispatch(authByUsername({ password, username }));
    }, [dispatch, password, username]);

    const {
        className,
    } = props;

    useEffect(() => () => {
        dispatch(authActions.clearAuthSlice());
    }, [dispatch]);

    return (
        <DinamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.AuthForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    >
                        {error}
                    </Text>
                )}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    autoFocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.button}
                    onClick={onClickAuth}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DinamicModuleLoader>
    );
});

export default AuthForm;
