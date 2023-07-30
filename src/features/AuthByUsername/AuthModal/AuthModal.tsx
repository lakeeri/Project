import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loder/Loader';
import { AuthFormAsync } from '../AuthForm/AuthFormAsync';

interface AuthModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const AuthModal: React.FC<AuthModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <AuthFormAsync />
            </Suspense>

        </Modal>
    );
};
