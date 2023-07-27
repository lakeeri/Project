import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Counter />
        </div>
    );
}
