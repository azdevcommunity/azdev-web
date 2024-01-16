import React, {useState} from 'react';
import GoogleSignInButton from "../../home/component/GoogleSignInButton/GoogleSignInButton.tsx";
import GithubSignInButton from "../../home/component/GithubSignInButton/GithubSignInButton.tsx";
import style from './../register.module.css';
import SubmitButton from "../../../components/buttons/SubmitButton.tsx";
import InputGroup from "../../../components/form/inputgroup/InputGroup.tsx";
import FormContainer from "../../../components/form/formcontainer/Formcontainer.tsx";

const RegisterForm: React.FC = () => {

    const [form, setForm] = useState<RegisterForm>({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(p => ({
            ...p,
            [name]: value
        }));
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div className={"flex"}>
                    <InputGroup>
                        <label htmlFor={"email"} className={style.inputHeader}>Email</label>
                        <input
                            id={"email"}
                            type="email"
                            name="email"
                            placeholder="Email adresin"
                            value={form.email}
                            onChange={handleChange}
                            className={style.inputField}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor={"email"} className={style.inputHeader}>Email</label>
                        <input
                            id={"email"}
                            type="email"
                            name="email"
                            placeholder="Email adresin"
                            value={form.email}
                            onChange={handleChange}
                            className={style.inputField}
                        />
                    </InputGroup>
                </div>
                <InputGroup>
                    <label htmlFor={"email"} className={style.inputHeader}>Email</label>
                    <input
                        id={"email"}
                        type="email"
                        name="email"
                        placeholder="Email adresin"
                        value={form.email}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </InputGroup>
                <InputGroup>
                    <label htmlFor={"password"} className={style.inputHeader}>Şifrə</label>
                    <input
                        id={"password"}
                        type="password"
                        name="password"
                        placeholder="Şifrə"
                        value={form.password}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </InputGroup>
                <InputGroup>
                    <label htmlFor={"passwordConfirm"} className={style.inputHeader}>Tekrar Şifrə</label>
                    <input
                        id={"passwordConfirm"}
                        type="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Tekrar Şifrə"
                        value={form.passwordConfirm}
                        onChange={handleChange}
                        className={style.inputField}
                    />
                </InputGroup>
                <InputGroup>
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
    )
};

export default RegisterForm;
