import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-conatiner'>
            <div>
                <h2 className='form-title'>Please SignUp!!!!!!</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="text">Name</label>
                        <input type="text" name='text' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password"> Confirm Password</label>
                        <input type="password" name='password' />
                    </div>
                    <input className='form-submit' type="submit" value='Login' />
                </form>
                <p><Link className='form-link' to='/login'>already registered? </Link></p>

            </div>

        </div>

    );
};

export default SignUp;