import React from 'react';
// import React, { useState } from 'react';
import GoogleSignInButton from '../../container/home/component/GoogleSignInButton/GoogleSignInButton';
import GithubSignInButton from '../../container/home/component/GithubSignInButton/GithubSignInButton';
import style from './SignInModal.module.css';
// import GlowingInput from '../GlowingInput/GlowingInput';
// import { Input } from "@nextui-org/react";
import CustomButton from '../../container/home/component/CustomBlueButton/CustomButton';

interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
}



const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
    // const [email, setEmail] = useState('');



    if (!isOpen) return null;

    return (
        <div className={`${style.singInModal} fixed inset-0 bg-custom-color-100 bg-opacity-60 flex justify-center items-center`}>
            <div className={`${style.signInComponents} bg-custom-color-900 text-white rounded-[15px] max-w-lg w-full relative pl-28 pr-28 pt-10 pb-16`}>
                <button onClick={onClose} className="absolute top-0 left-0 mt-4 ml-4 text-3xl leading-none hover:text-gray-300">&times;</button>
                <h2 className="text-3xl font-bold mb-8 text-milk-white pt-10">Daxil ol</h2>
                <GoogleSignInButton  />
                <GithubSignInButton className="mt-5"/>
                <div className="flex items-center justify-center my-8">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="mx-2 text-sm text-gray-300">və ya</span>
                    <div className="flex-grow border-t border-gray-500"></div>
                </div>
                {/* <GlowingInput /> */}

                <div className={style.inputGroup}>
                    <input required type="text" name="text" className={style.input} />
                    <label className={style.userLabel}>Telefon, email və ya istifadəçi adı</label>
                </div>

                <CustomButton className="signInNextButton" value="Növbəti" />
                <CustomButton className="forgotPasswordButton" value="Şifrəni unutdun?" />
                <p className="text-gray-400 mt-4">
                    Hesabın yoxdur? <a href="#" className="text-blue-500 hover:underline">Qeydiyyatdan keç</a>
                </p>
            </div>
        </div>
    );
};

export default SignInModal;

