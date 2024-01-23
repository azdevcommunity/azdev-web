import React, { useState, useRef } from 'react';
import style from './SignUpModal.module.css';
import styleSignUp from './SignUpModal.module.css';
import styleSignUpStepTwo from './SignUpStepTwoModal.module.css';
import styleSignUpStepThree from './SignUpStepThreeModal.module.css';
import styleSignUpStepFour from './SignUpStepFourModal.module.css';

import CustomButton from '../CustomBlueButton/CustomButton.tsx';
// import { useNavigate } from 'react-router-dom';
import SelectBoxMonth from '../SelectBoxMonth/SelectBoxMonth.tsx';
import SelectBoxDay from '../SelectBoxDay/SelectBoxDay.tsx';
import SelectBoxYear from '../SelectBoxYear/SelectBoxYear.tsx';
import { Checkbox, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { CheckCircleIcon } from '@heroicons/react/24/outline';


interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {

    const [currentView, setCurrentView] = useState('signUp');
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [birthdayInput, setBirthdayInput] = useState(false);

    const [checked, setChecked] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const [mothSelectBox, setMothSelectBox] = useState(null);
    const [daySelectBox, setDaySelectBox] = useState(null);
    const [yearSelectBox, setYearSelectBox] = useState(null);
    const [fullDate, setFullDate] = useState('');


    const toggleCheckbox = () => {
        setChecked(!checked);
    };


    const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value);
    }

    const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const onMonthSelected = (selectedMonth: string) => {
        setMothSelectBox(selectedMonth);
        console.log(selectedMonth);
    };

    const onDaySelected = (selectedDay: string) => {
        setDaySelectBox(selectedDay);
        console.log(selectedDay);
    }

    const onYearSelected = (selectedYear: string) => {
        setYearSelectBox(selectedYear);
        console.log(selectedYear);
    }

    const RenderDropDownVFCode = () =>
    (
        <Dropdown  backdrop="blur"> 
            <DropdownTrigger >
                    <button className='text-blue-500 hover:underline hover:cursor-pointer text-sm mt-2'>Kod gəlmədi?</button>
            
            </DropdownTrigger>
            <DropdownMenu
            variant='solid'
            color='primary'
                aria-label="Action event example"
                onAction={(key) => alert(key)}
            >
                <DropdownItem key="new">Yenidən göndər</DropdownItem>
                <DropdownItem key="copy">Telefon ilə davam et</DropdownItem>
            </DropdownMenu>
        </Dropdown>

    );


    // const navigate = useNavigate();

    const onCloseAndReset = () => {
        setEmailInput('');
        setNameInput('');
        setMothSelectBox('');
        setBirthdayInput(null);
        onClose();
    }

    const onNextClick = (stepNo: any) => {

        if (stepNo === 2) {
            setCurrentView('step2');
            setFullDate(`${mothSelectBox}, ${daySelectBox}, ${yearSelectBox}`);
        }

        setCurrentView(`step${stepNo}`);
    }
    const focusOnInput = (inputRef) => {
        setCurrentView('signUp');
        setTimeout(() => {
            inputRef.current?.focus();
        }
            , 100);
    };

    const setFocusMonthSB = () => {
        setBirthdayInput(true);
        setCurrentView('signUp');
    }

    const RenderForm = () => {
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
                                <input required type="text" name="text" className={styleSignUp.input} ref={nameInputRef} onChange={onNameInputChange} maxLength={50} value={nameInput} />
                                <label className={styleSignUp.userLabel}>Name</label>
                                <span className={styleSignUp.charCounter}> {nameInput.length} / 50</span>
                                <span className={styleSignUp.errorMessage}>What's your name?</span>
                            </div>

                            <div className={`${styleSignUp.inputGroup} emailInput`}>
                                <input required type="mail" name="text" className={styleSignUp.input} ref={emailInputRef} onChange={onEmailInputChange} value={emailInput} />
                                <label className={styleSignUp.userLabel}>Email</label>
                            </div>

                            <div className={styleSignUp.dateOfBirthTextSpanFirst}>
                                Doğum tarixi
                            </div>

                            <span className={styleSignUp.dateOfBirthTextSpanSecond}>Bu ictimaiyyətə göstərilməyəcək. Bu hesab biznes, ev heyvanı və ya başqa bir şey üçün olsa belə, öz yaşınızı təsdiqləyin.</span>

                            <div className={styleSignUp.dateOfBirthContainer}>
                                {birthdayInput && <SelectBoxMonth isFocus={birthdayInput} onChange={onMonthSelected} selectedMonthName={mothSelectBox} />}
                                {!birthdayInput && <SelectBoxMonth onChange={onMonthSelected} selectedMonthName={mothSelectBox} />}
                                <SelectBoxDay onChange={onDaySelected} selectedDayName={daySelectBox} />
                                <SelectBoxYear onChange={onYearSelected} selectedYearName={yearSelectBox} />
                            </div>
                            <CustomButton className="signUpNextButton" value="Növbəti" onClick={() => onNextClick(2)} />
                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'step2') {
            return (
                <>
                    <div className={`${style.signUpComponents} bg-custom-color-900 text-white rounded-[15px]  max-w-lg w-full relative pl-14 pr-14 pb-16`}>
                        <div className={`${style.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className={`${style.closeButton} text-3xl leading-none hover:text-gray-300`}>&times;</button>
                            <span className={`${style.stepInfo}`} >Addım 2/5</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-8 text-milk-white pt-10">Təcrübənizi özəlləştirin</h2>
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

                        <CustomButton className="signUpNextButton" value="Növbəti" onClick={() => onNextClick(3)} />

                    </div>
                </>
            );
        } else if (currentView === 'step3') {
            return (
                <>
                    <div className={`${styleSignUpStepThree.signUpComponents} bg-custom-color-900  text-white rounded-[15px] max-w-lg w-full relative pl-20 pr-16 pt-10 pb-7`}>
                        <div className={`${styleSignUpStepThree.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className="text-3xl leading-none hover:text-gray-300">&times;</button>
                            <span className={`${styleSignUpStepThree.stepInfo}`} >Addım 3/5</span>
                        </div>
                        <div className={styleSignUpStepThree.modalContent}>
                            <h2 className="text-3xl font-bold mb-1   text-milk-white">Hesabını yarat</h2>

                            <div className={`${styleSignUpStepThree.inputGroup} ${styleSignUpStepThree.nameInput}`} >
                                <CheckCircleIcon className={`${styleSignUpStepThree.checkIcon} w-5 h-5 absolute right-0 mt-5 mr-3 cursor-pointer`} />
                                <input readOnly={true} type="text" name="text" onClick={() => focusOnInput(nameInputRef)} className={`${styleSignUpStepThree.input}  cursor-pointer`} onChange={onNameInputChange} value={nameInput} />
                                <label className={styleSignUpStepThree.userLabel} >Name</label>
                            </div>

                            <div className={`${styleSignUpStepThree.inputGroup} emailInput `} >
                                <CheckCircleIcon className={`${styleSignUpStepThree.checkIcon} w-5 h-5 absolute right-0 mt-5 mr-3 cursor-pointer`} />
                                <input readOnly={true} type="mail" name="text" onClick={() => focusOnInput(emailInputRef)} className={`${styleSignUpStepThree.input}  cursor-pointer`} onChange={onEmailInputChange} value={emailInput} />
                                <label className={`${styleSignUpStepThree.userLabel}`}>Email</label>
                            </div>

                            <div className={`${styleSignUpStepThree.inputGroup} birthday`}>
                                <CheckCircleIcon className={`${styleSignUpStepThree.checkIcon} w-5 h-5 absolute right-0 mt-5 mr-3 cursor-pointer`} />
                                <input readOnly={true} type="mail" name="text" className={`${styleSignUpStepThree.input}  cursor-pointer`} onClick={setFocusMonthSB} value={fullDate} />
                                <label className={`${styleSignUpStepThree.userLabel}`} >Doğum günü</label>
                            </div>

                            <div className={`${styleSignUpStepTwo.termsAndConditionContainer} mb-8`}>
                                <div className={`${styleSignUpStepTwo.termsAndConditionBody} mt-8`}>
                                    <p className={`${styleSignUpStepTwo.termsAndConditionBodyText} leading-[0.8rem]`}>Qeydiyyatdan keçməklə, <span className='text-blue-500 hover:underline hover:cursor-pointer'>Şərtlər</span>, <span className='text-blue-500 hover:underline hover:cursor-pointer'>Məxfilik Siyasəti</span> və <span className='text-blue-500 hover:underline hover:cursor-pointer'>Kuki İstifadəsi</span> ilə razılaşırsan. AzDev <span className='text-blue-500 hover:underline hover:cursor-pointer'>Məxfilik Siyasətimizdə</span> qeyd olunan məqsədlər üçün e-poçt ünvanın və telefon nömrən daxil olmaqla əlaqə məlumatlarından istifadə edə bilər. <span className='text-blue-500 hover:underline hover:cursor-pointer'>Daha ətraflı</span></p>
                                </div>
                            </div>

                            <CustomButton className="signUpNextButton mt-10" value="Növbəti" onClick={() => onNextClick(4)} />
                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'step4') {
            return (
                <>
                    <div className={`${styleSignUpStepFour.signUpComponents} bg-custom-color-900  text-white rounded-[15px] max-w-lg w-full relative pl-20 pr-16 pt-10 pb-7`}>
                        <div className={`${styleSignUpStepFour.modelHeaderComponents}`}>
                            <button onClick={onCloseAndReset} className="text-3xl leading-none hover:text-gray-300">&times;</button>
                            <span className={`${styleSignUpStepFour.stepInfo}`} >Addım 4/5</span>
                        </div>
                        <div className={styleSignUpStepFour.modalContent}>

                            <h2 className="text-3xl font-bold mb-1   text-milk-white">Biz sənə kod göndərdik</h2>
                            <h2 className="text-1xl font-normal mb-1   text-custom-color-200">Kodu aşağıya daxil et ki, {emailInput} adresini təsdiq edək</h2>

                            <div className={`${styleSignUpStepFour.inputGroup} ${styleSignUpStepFour.nameInput}`} >
                                <input required type="text" name="text" className={`${styleSignUpStepFour.input}`} onChange={onNameInputChange} />
                                <label className={styleSignUpStepFour.userLabel} >Təsdiq kodu</label>

                            </div>

                            <RenderDropDownVFCode />


                            <CustomButton className="signUpNextButton mt-10" value="Növbəti" />

                        </div>
                    </div>
                </>
            );
        } else if (currentView === 'signUpWithPhone') {
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
                                <input required type="text" name="text" className={styleSignUp.input} ref={nameInputRef} onChange={onNameInputChange} maxLength={50} value={nameInput} />
                                <label className={styleSignUp.userLabel}>Name</label>
                                <span className={styleSignUp.charCounter}> {nameInput.length} / 50</span>
                                <span className={styleSignUp.errorMessage}>What's your name?</span>
                            </div>

                            <div className={`${styleSignUp.inputGroup} emailInput`}>
                                <input required type="mail" name="text" className={styleSignUp.input} ref={emailInputRef} onChange={onEmailInputChange} value={emailInput} />
                                <label className={styleSignUp.userLabel}>Email</label>
                            </div>

                            <div className={styleSignUp.dateOfBirthTextSpanFirst}>
                                Doğum tarixi
                            </div>

                            <span className={styleSignUp.dateOfBirthTextSpanSecond}>Bu ictimaiyyətə göstərilməyəcək. Bu hesab biznes, ev heyvanı və ya başqa bir şey üçün olsa belə, öz yaşınızı təsdiqləyin.</span>

                            <div className={styleSignUp.dateOfBirthContainer}>
                                {birthdayInput && <SelectBoxMonth isFocus={birthdayInput} onChange={onMonthSelected} selectedMonthName={mothSelectBox} />}
                                {!birthdayInput && <SelectBoxMonth onChange={onMonthSelected} selectedMonthName={mothSelectBox} />}
                                <SelectBoxDay onChange={onDaySelected} selectedDayName={daySelectBox} />
                                <SelectBoxYear onChange={onYearSelected} selectedYearName={yearSelectBox} />
                            </div>
                            <CustomButton className="signUpNextButton" value="Növbəti" onClick={() => onNextClick(2)} />
                        </div>
                    </div>
                </>
            );
        }
    }

    if (!isOpen) return null;

    return (
        <div className={`${style.singInModal} fixed inset-0 bg-custom-color-100 bg-opacity-60 flex justify-center items-center`}>
            <RenderForm />
        </div>
    );

};

export default SignUpModal;