import React, { useState } from 'react';
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton.tsx';
import GithubSignInButton from '../GithubSignInButton/GithubSignInButton.tsx';
import style from './SignInModal.module.css';
import CustomButton from '../CustomBlueButton/CustomButton.tsx';
import { useNavigate } from 'react-router-dom';

interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
}



const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {

    const [currentView, setCurrentView] = useState('signIn');
    const [userInput, setUserInput] = useState('');
    // const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate();

    const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const onCloseAndReset = () => {
        setCurrentView('signIn');
        onClose();
    }



    const onNextClick = () => {
        setCurrentView('password');
    }

    const renderForm = () => {
        if (currentView === 'signIn') {
            return (
                <>
                    <div className={`${style.signInComponents} bg-custom-color-900 text-white rounded-[15px] max-w-lg w-full relative pl-24 pr-24 pt-10 pb-16`}>
                        <div className={`${style.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className="text-3xl leading-none hover:text-gray-300">&times;</button>
                            <img src="/assets/home/azdev_logo.png" className={`${style.modalLogo}`} alt={"azdev_logo"} />
                        </div>
                        <div className={style.modalContent}>
                            <h2 className="text-3xl font-bold mb-8 text-milk-white">Daxil ol</h2>
                            <GoogleSignInButton />
                            <GithubSignInButton className="mt-5" />
                            <div className="flex items-center justify-center my-8">
                                <div className="flex-grow border-t border-gray-500"></div>
                                <span className="mx-2 text-sm text-gray-300">və ya</span>
                                <div className="flex-grow border-t border-gray-500"></div>
                            </div>
                            {/* <GlowingInput /> */}

                            <div className={style.inputGroup}>
                                <input required type="text" name="text" className={style.input} onChange={onUserInputChange} />
                                <label className={style.userLabel}>Telefon, email və ya istifadəçi adı</label>
                            </div>

                            <CustomButton className="signInNextButton" value="Növbəti" onClick={onNextClick} />
                            <CustomButton className="forgotPasswordButton" value="Şifrəni unutdun?" />
                            <p className="bg-sky-600 mt-14">
                                Hesabın yoxdur? <a href="#" className="text-blue-500 hover:underline">Qeydiyyatdan keç</a>
                            </p>
                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'password') {
            return (
                <>
                    <div className={`${style.signInComponents} bg-custom-color-900 text-white rounded-[15px] max-w-lg w-full relative pl-16 pr-16 pt-10 pb-16`}>
                        <div className={`${style.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className={`${style.closeButton} text-3xl leading-none hover:text-gray-300`}>&times;</button>
                            <img src="/assets/home/azdev_logo.png" className={`${style.modalLogo}`} alt={"azdev_logo"} />
                        </div>
                        <h2 className="text-3xl font-bold mb-8 text-milk-white pt-10">Şifrəni daxil et</h2>
                        <div className={`${style.inputGroup} w-96`}>
                            <input required type="text" name="text" className={style.inputPasswordScreen} value={userInput} disabled />
                            <div className={style.bgForUserInput}>
                                <label className={style.userLabelPasswordScreen}>Telefon, email və ya istifadəçi adı</label>
                            </div>
                        </div>
                        <div className={`${style.inputGroup} ${style.passwordInput}`}>
                            <input required type="password" name="text" className={style.input} />
                            <label className={style.userLabel}>Şifrə</label>
                        </div>
                        <div className={` ${style.forgotPassword} mb-48`}>
                            <a href="#" className={`text-blue-500 hover:underline`}>Şifrəni unutdun?</a>
                        </div>

                        <CustomButton className="signInPasswordStButton" value="Daxil ol" onClick={() => navigate("/home")} />
                        {/* <CustomButton className="forgotPasswordButton" value="Şifrəni unutdun?" /> */}
                    </div>
                </>
            );
        }
    }



    if (!isOpen) return null;

    return (
        <div className={`${style.singInModal} fixed inset-0 bg-custom-color-100 bg-opacity-60 flex justify-center items-center`}>
            {renderForm()}
        </div>
    );
};

export default SignInModal;

