import React, { useState } from 'react';
import style from './SignUpModal.module.css';
import styleSignUp from './SignUpModal.module.css';
import CustomButton from '../CustomBlueButton/CustomButton.tsx';
import { useNavigate } from 'react-router-dom';
import SelectBoxMonth from '../SelectBoxMonth/SelectBoxMonth.tsx';
import SelectBoxDay from '../SelectBoxDay/SelectBoxDay.tsx';
import SelectBoxYear from '../SelectBoxYear/SelectBoxYear.tsx';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {

    const [currentView, setCurrentView] = useState('signUp');
    const [userInput, setUserInput] = useState('');

    const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'dateOfBirth') {
        } else {
            setUserInput(value);
        }
    }

    const navigate = useNavigate();

    const onCloseAndReset = () => {
        setCurrentView('signUp');
        onClose();
    }

    const onNextClick = () => {
        setCurrentView('password');
    }

    const renderForm = () => {
        if (currentView === 'signUp') {
            return (
                <>
                    <div className={`${styleSignUp.signUpComponents} bg-custom-color-900  text-white rounded-[15px] max-w-lg w-full relative pl-14 pr-14 pt-10 pb-16`}>
                        <div className={`${styleSignUp.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className="text-3xl leading-none hover:text-gray-300">&times;</button>
                            <span className={`${styleSignUp.stepInfo}`} >Addım 1/5</span>
                        </div>
                        <div className={styleSignUp.modalContent}>
                            <h2 className="text-3xl font-bold mb-1   text-milk-white">Hesabını yarat</h2>

                            <div className={`${styleSignUp.inputGroup} ${styleSignUp.nameInput}`} >
                                <input required type="text" name="text" className={styleSignUp.input} onChange={onUserInputChange} maxLength={50} />
                                <label className={styleSignUp.userLabel}>Name</label>
                                <span className={styleSignUp.charCounter}> {userInput.length} / 50</span>
                                <span className={styleSignUp.errorMessage}>What's your name?</span>
                            </div>

                            <div className={`${styleSignUp.inputGroup} emailInput`}>
                                <input required type="mail" name="text" className={styleSignUp.input} onChange={onUserInputChange} />
                                <label className={styleSignUp.userLabel}>Email</label>
                            </div>

                            <div className={styleSignUp.dateOfBirthTextSpanFirst}>
                                Doğum tarixi
                            </div>
                            
                            <span className={styleSignUp.dateOfBirthTextSpanSecond}>Bu ictimaiyyətə göstərilməyəcək. Bu hesab biznes, ev heyvanı və ya başqa bir şey üçün olsa belə, öz yaşınızı təsdiqləyin.</span>

                            <div className={styleSignUp.dateOfBirthContainer}>
                                <SelectBoxMonth />
                                <SelectBoxDay />
                                <SelectBoxYear />

                            </div>
                            <CustomButton className="signUpNextButton" value="Növbəti" onClick={onNextClick} />
                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'password') {
            return (
                <>
                    <div className={`${style.signUpComponents} bg-custom-color-900 text-white rounded-[15px]  max-w-lg w-full relative pl-16 pr-16 pt-10 pb-16`}>
                        <div className={`${style.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className={`${style.closeButton} text-3xl leading-none hover:text-gray-300`}>&times;</button>
                            <span className={`${style.stepInfo}`} >Step 1 of 5</span>
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

                        <CustomButton className="signUpPasswordStButton" value="Daxil ol" onClick={() => navigate("/home")} />
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

export default SignUpModal;