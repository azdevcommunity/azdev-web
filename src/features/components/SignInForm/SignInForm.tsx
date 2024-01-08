import React, { useState } from 'react';
import style from './signInForm.module.css';

const SignInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you would usually send a request to your server
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className={style.signInFormContainer}>
            <form onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                    <span className={style.inputHeader}>Email</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email adresin"
                        value={email}
                        onChange={handleEmailChange}
                        className={style.inputField}
                    />
                </div>
                <div className={style.inputGroup}>
                    <span className={style.inputHeader}>Şifrə</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Şifrə"
                        value={password}
                        onChange={handlePasswordChange}
                        className={style.inputField}
                    />
                </div>
                <div className={style.inputGroup}>
                    <button type="submit" className={style.submitButton}>Daxil ol</button>
                </div>
                <div className={style.socialLogin}>
                    <button className={`${style.socialButton} ${style.google}`}>
                        <i className='fa fa-home'></i>Google ilə daxil ol
                    </button>
                    <button className={`${style.socialButton} ${style.apple}`}>
                        <img src='../../../../public/assets/home/apple_icon_2.png'/>Apple ilə daxil ol
                    </button>
                </div>
                <div className={style.register}>
                    Hələ hesabınız yoxdur?<a href="/register" className={style.registerText}>Qeydiyyatdan keçin!</a>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
