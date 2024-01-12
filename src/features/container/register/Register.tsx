 import  styles from './register.module.css';
import NavBar from "../../components/Navbar/NavBar.tsx";
import RegisterForm from "./component/RegisterForm.tsx";

const Register = () => {
    return (
        <>
            <NavBar visibleButtons={false}/>
            <div className={styles.registerContainer}>
                <RegisterForm/>
            </div>
        </>
    );
};

export default Register;