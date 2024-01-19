import React from 'react';
import SignInModal from './SignInModal/SignInModal';
import SignUpModal from './SignUpModal/SignUpModal';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    type: string;
}

const Modal: React.FC<ModalProps> = ({ open, type, onClose }) => {
    if (!open) return null;

    return (
        <>
            {type === 'signUp' && <SignUpModal isOpen={open} onClose={onClose} />}
            {type === 'signIn' && <SignInModal isOpen={open} onClose={onClose} />}
        </>
    );
};

export default Modal;