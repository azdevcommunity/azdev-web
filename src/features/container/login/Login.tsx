import styles from './style/login.module.css';
import SignInForm from "../../components/SignInForm/SignInForm.tsx";
import NavBar from "../../components/Navbar/NavBar.tsx";

const Login = () => {
    return (
        <>
            <NavBar visibleButtons={false}/>
            <div className={styles.loginContainer}>
                <SignInForm/>
            </div>
        </>
    );
};

export default Login;