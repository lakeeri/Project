import { lazy } from 'react';

export const AuthFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AuthForm')), 800);
}));
