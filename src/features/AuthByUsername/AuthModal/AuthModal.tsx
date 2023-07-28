import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './AuthModal.module.scss';
import { AuthForm } from '../AuthForm/AuthForm';

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
            className={classNames(cls.AuthModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <AuthForm />
        </Modal>
    );
};
