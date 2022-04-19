import React, { useState, useContext, useEffect } from 'react';
import loginImg from '../../Utils/assets/undraw_To_the_stars_qhyy.png';
import loginImgB from '../../Utils/assets/undraw_Astronaut_xko2.png';
import styles from './Login.module.css';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setisLoggedIn] = useState(false)
    const history = useHistory();
    const authCxt = useContext(AuthContext);

    useEffect(() => {
        if (authCxt.isLoggedIn === true) {
            history.push("/dashboard")
        }
    });

    const emailInputHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const useEmailValidation = (email) => {
        const isEmailValid = /@/.test(email);
        return isEmailValid;
    };

    const usePasswordValidation = (password) => {
        if (!password || password.length === 0) {
            return;
        }
        const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
        return isPasswordValid
    }

    const isEmailValid = useEmailValidation(email);
    const isPasswordValid = usePasswordValidation(password);
    const isFormValid = isEmailValid && isPasswordValid;


    const handleSubmit = (event) => {
        event.preventDefault();
        if (authCxt.isLoggedIn === false) {
            authCxt.login()
        }
    }

    return (
        <>
            <div className={styles.login}>
                <div className={styles.login_background}>
                    <h1>Welcome to Star Wars the Clone Wars</h1>
                    <img src={loginImg} alt='An image of a rocket' />
                </div>
                <div className={styles.login_form}>
                    <div className={styles.login_formImage}>
                        <img src={loginImgB} alt='A depiction of an astronaut' />
                    </div>
                    <div className={styles.formHolder}>
                        <h3>Sign in to continue to your account.</h3>
                        <div className={styles.form}>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="Email address">Email Address</label> <br />
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    onChange={emailInputHandler}
                                    value={email}
                                /> <br />
                                <label htmlFor="password">Password</label> <br />
                                <input
                                    type='password'
                                    placeholder='Enter Strong Password'
                                    onChange={passwordInputHandler}
                                    value={password}
                                /><br />
                                <button 
                                    type='submit' 
                                    disabled={!isFormValid} 
                                    className={!isFormValid ? styles.disabled : ""} 
                                   >Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <p>All rights reserved © 2020 STAR WARS</p>
                        </div>
                        <div className={styles}>
                            <p className={styles.space}>Privacy | Terms</p>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;
