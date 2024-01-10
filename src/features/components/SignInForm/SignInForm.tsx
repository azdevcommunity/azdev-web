import React, {useEffect, useState} from 'react';
import style from './signInForm.module.css';
import GoogleSignInButton from '../../container/home/component/GoogleSignInButton/GoogleSignInButton.tsx';
import GithubSignInButton from '../../container/home/component/GithubSignInButton/GithubSignInButton.tsx';

const SignInForm: React.FC = () => {
    const [form,setForm]=useState({
        email:"",
        password:""
    })
    useEffect(() => {
        console.log(form);
    }, [form]);
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const name  =e.target.name;
        const value= e.target.value;
        setForm(p=>({
            ...p,
            [name]:value
        }));
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you would usually send a request to your server
        console.log('Email:', form.email, 'Password:', form.password);
    };
    const handleGoogleSignIn = () => {
        // Handle the sign-in logic here
        console.log('Sign in with Google clicked');
      };

    const handleGithubSignIn = () => {
        // Handle the sign-in logic here
        console.log('Sign in with Github clicked');
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
                        value={form.email}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </div>
                <div className={style.inputGroup}>
                    <span className={style.inputHeader}>Şifrə</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Şifrə"
                        value={form.password}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </div>
                <div className={style.inputGroup}>
                    <button type="submit" className={style.submitButton}>Daxil ol</button>
                </div>
                <div className={style.socialLogin}>
                    <GoogleSignInButton onClick={handleGoogleSignIn} />
                    <GithubSignInButton onClick={handleGithubSignIn} />
                </div>
                <div className={style.register}>
                    Hesabın yoxdur?<a href="/register" className={style.registerText}>Qeydiyyatdan keç!</a>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
