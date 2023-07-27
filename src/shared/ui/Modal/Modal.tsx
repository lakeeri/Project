import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}
const ANIMATION_DELAY = 200;

export const Modal: React.FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const overlayClickHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            overlayClickHandler();
        }
    }, [overlayClickHandler]);

    const contentClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={overlayClickHandler}>
                    <div className={cls.content} onClick={contentClickHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
