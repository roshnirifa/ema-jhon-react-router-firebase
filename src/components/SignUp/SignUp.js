import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/home')

    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your password didnt match')
            return;
        }
        if (password.length < 6) {
            setError('password must have 6 character or longer')
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-conatiner'>
            <div>
                <h2 className='form-title'>Please SignUp!!!!!!</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="emial" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <div className="input-group">
                        <label htmlFor="password"> Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='password' required />
                    </div>
                    <input className='form-submit' type="submit" value='Login' required />
                </form>
                <p><Link className='form-link' to='/login'>already registered? </Link></p>

            </div>

        </div>

    );
};

export default SignUp;