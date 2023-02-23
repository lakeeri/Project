import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

//компонет для тестирования
export const BugButton: React.FC = () => {
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        // eslint-disable-next-line i18next/no-literal-string
        >
            throw error
        </Button>
    );
};
