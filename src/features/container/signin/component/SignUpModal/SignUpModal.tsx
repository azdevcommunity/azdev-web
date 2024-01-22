import React, { useState,useRef } from 'react';
import style from './SignUpModal.module.css';
import styleSignUp from './SignUpModal.module.css';
import styleSignUpStepTwo from './SignUpStepTwoModal.module.css';
import styleSignUpStepThree from './SignUpStepThreeModal.module.css';

import CustomButton from '../CustomBlueButton/CustomButton.tsx';
// import { useNavigate } from 'react-router-dom';
import SelectBoxMonth from '../SelectBoxMonth/SelectBoxMonth.tsx';
import SelectBoxDay from '../SelectBoxDay/SelectBoxDay.tsx';
import SelectBoxYear from '../SelectBoxYear/SelectBoxYear.tsx';
import { Checkbox } from '@nextui-org/react';


interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {

    const [currentView, setCurrentView] = useState('signUp');
    const [userInput, setUserInput] = useState('');
    const [checked, setChecked] = useState(false);
    const stepThreeInputRef = useRef(null);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    const focusAndSelectInput = () => {
        stepThreeInputRef.current.focus();
        stepThreeInputRef.current.select();
      };

    const onUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'dateOfBirth') {
        } else {
            setUserInput(value);
        }
    }

    // const navigate = useNavigate();

    const onCloseAndReset = () => {
        setCurrentView('signUp');
        onClose();
    }

    const onNextClick = (stepNo: number) => {
        setCurrentView(`step${stepNo}`);
    }

    const renderForm = () => {
        if (currentView === 'signUp') {
            return (
                <>
                    <div className={`${styleSignUp.signUpComponents} bg-custom-color-900  text-white rounded-[15px] max-w-lg w-full relative pl-14 pr-14 pt-10 pb-7`}>
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
                            <CustomButton className="signUpNextButton" value="Növbəti" onClick={() => onNextClick(2)} />
                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'step2') {
            return (
                <>
                    <div className={`${style.signUpComponents} bg-custom-color-900 text-white rounded-[15px]  max-w-lg w-full relative pl-14 pr-14 pt-10 pb-7`}>
                        <div className={`${style.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className={`${style.closeButton} text-3xl leading-none hover:text-gray-300`}>&times;</button>
                            <span className={`${style.stepInfo}`} >Addım 2/5</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-8 text-milk-white pt-10">Təcrübənizi özəlləştirin</h2>

                        {/* terms and codition article. There are a header and a body text with checkbox  */}

                        <div className={`${styleSignUpStepTwo.termsAndConditionContainer} mb-8`}>
                            <div className={`${styleSignUpStepTwo.termsAndConditionHeader}`}>
                                <div className={`${styleSignUpStepTwo.termsAndConditionHeaderTitle}`}>Məxfiliyiniz bizim öncəliyimizdir</div>
                                <div className={`${styleSignUpStepTwo.termsAndConditionHeaderCheckbox} cursor-pointer`}>
                                    <div className={`${styleSignUpStepTwo.termsAndConditionHeaderCheckboxText}`} onClick={toggleCheckbox}>Gördüyünüz postları və təcrübənizi özəlləştirmək üçün məlumatlarınızdan istifadə edirik. Məxfiliyinizə hörmət edərək, adınız, e-poçt ünvanınız və ya telefon nömrənizlə birbaşa əlaqəli olmadan, anonim şəkildə emal edirik.</div>
                                    <Checkbox isSelected={checked} onValueChange={toggleCheckbox}></Checkbox>
                                </div>
                            </div>
                            <div className={`${styleSignUpStepTwo.termsAndConditionBody} mt-8`}>
                                <p className={`${styleSignUpStepTwo.termsAndConditionBodyText}`}>Qeydiyyatdan keçməklə, <span className='text-blue-500 hover:underline hover:cursor-pointer'>Şərtlər</span>, <span className='text-blue-500 hover:underline hover:cursor-pointer'>Məxfilik Siyasəti</span> və <span className='text-blue-500 hover:underline hover:cursor-pointer'>Kuki İstifadəsi</span> ilə razılaşırsan. AzDev <span className='text-blue-500 hover:underline hover:cursor-pointer'>Məxfilik Siyasətimizdə</span> qeyd olunan məqsədlər üçün e-poçt ünvanın və telefon nömrən daxil olmaqla əlaqə məlumatlarından istifadə edə bilər. <span className='text-blue-500 hover:underline hover:cursor-pointer'>Daha ətraflı</span></p>
                            </div>
                        </div>

                        <CustomButton className="signUpNextButton" value="Növbəti"  onClick={() => onNextClick(3)}/>
                        {/* <CustomButton className="forgotPasswordButton" value="Şifrəni unutdun?" /> */}
                    </div>
                </>
            );
        }else if (currentView === 'step3') {
            return (
                <>
                    <div className={`${styleSignUpStepThree.signUpComponents} bg-custom-color-900  text-white rounded-[15px] max-w-lg w-full relative pl-20 pr-16 pt-10 pb-7`}>
                        <div className={`${styleSignUpStepThree.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className="text-3xl leading-none hover:text-gray-300">&times;</button>
                            <span className={`${styleSignUpStepThree.stepInfo}`} >Addım 1/5</span>
                        </div>
                        <div className={styleSignUpStepThree.modalContent}>
                            <h2 className="text-3xl font-bold mb-1   text-milk-white">Hesabını yarat</h2>

                            <div className={`${styleSignUpStepThree.inputGroup} ${styleSignUpStepThree.nameInput}`} >
                                <input required disabled type="text" name="text" className={styleSignUpStepThree.input} onChange={onUserInputChange} />
                                <label className={styleSignUpStepThree.userLabel}>Name</label>
                            </div>

                            <div className={`${styleSignUpStepThree.inputGroup} emailInput`}>
                                <input required disabled type="mail" name="text" className={styleSignUpStepThree.input} onChange={onUserInputChange} value={"sd"}/>
                                <label className={`${styleSignUpStepThree.userLabel}` } onClick={focusAndSelectInput}>Email</label>
                            </div>

                            <div className={`${styleSignUpStepThree.inputGroup} emailInput`}>
                                <input required disabled type="mail" name="text" className={styleSignUpStepThree.input} onChange={onUserInputChange}/>
                                <label className={`${styleSignUpStepThree.userLabel}` } onClick={focusAndSelectInput}>Doğum günü</label>
                            </div>

                            <CustomButton className="signUpNextButton" value="Növbəti"  onClick={() => onNextClick(4)} />
                        </div>
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