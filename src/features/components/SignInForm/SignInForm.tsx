import React, {useEffect, useState} from 'react';
import style from './signInForm.module.css';
import GoogleSignInButton from '../../container/home/component/GoogleSignInButton/GoogleSignInButton.tsx';
import GithubSignInButton from '../../container/home/component/GithubSignInButton/GithubSignInButton.tsx';
import SubmitButton from "../buttons/SubmitButton.tsx";
import FormContainer from "../form/formcontainer/Formcontainer.tsx";
import InputGroup from "../form/inputgroup/InputGroup.tsx";

const SignInForm: React.FC = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        console.log(form);
    }, [form]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(p => ({
            ...p,
            [name]: value
        }));
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', form.email, 'Password:', form.password);
    };
    const handleGoogleSignIn = () => {
        console.log('Sign in with Google clicked');
    };

    const handleGithubSignIn = () => {
        console.log('Sign in with Github clicked');
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <InputGroup padding={"0 12px 0  0"} >
                    <span className={style.inputHeader}>Email</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email adresin"
                        value={form.email}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </InputGroup>
                <InputGroup padding={"0 0 0  12px"}>
                    <span className={style.inputHeader}>Şifrə</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Şifrə"
                        value={form.password}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </InputGroup>
                <InputGroup >
                    <SubmitButton>Daxil ol</SubmitButton>
                </InputGroup>
                <div className={style.socialLogin}>
                    <GoogleSignInButton onClick={handleGoogleSignIn}/>
                    <GithubSignInButton onClick={handleGithubSignIn}/>
                </div>
                <div className={style.register}>
                    Hesabın yoxdur?<a href="/register" className={style.registerText}>Qeydiyyatdan keç!</a>
                </div>
            </form>
        </FormContainer>
    );
};

export default SignInForm;
