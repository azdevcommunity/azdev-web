import React, { useState } from 'react';
import GoogleSignInButton from '../../container/home/component/GoogleSignInButton/GoogleSignInButton';
import GithubSignInButton from '../../container/home/component/GithubSignInButton/GithubSignInButton';
import GlowingInput from '../GlowingInput/GlowingInput';
import {Input} from "@nextui-org/react";


interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center">
            <div className="bg-custom-color-900 text-white rounded-[15px] max-w-lg w-full relative pl-28 pr-28 pt-10 pb-10">
                <button onClick={onClose} className="absolute top-0 left-0 mt-4 ml-4 text-3xl leading-none hover:text-gray-300">&times;</button>
                <h2 className="text-2xl font-bold mb-8 text-milk-white pt-10">Sign in to AzDev</h2>
                <GoogleSignInButton />
                <GithubSignInButton />
                <div className="flex items-center justify-center my-8">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="mx-2 text-sm text-gray-300">və ya</span>
                    <div className="flex-grow border-t border-gray-500"></div>
                </div>
                {/* <GlowingInput /> */}
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Email" />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                </div>
                <button className="bg-blue-500 rounded py-2 px-4 my-2 w-full">Next</button>
                <a href="#" className="text-blue-300 hover:text-blue-500">Forgot password?</a>
                <p className="text-gray-400 mt-4">
                    Don't have an account? <a href="#" className="text-blue-300 hover:text-blue-500">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default SignInModal;

