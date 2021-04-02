import React, { useContext, useState } from 'react';  
import { AuthContext } from '../../context/auth/AuthContext';
import { useForm } from '../../hooks/useForm';
//import { getAuth } from '../../helpers/getAuth';

import '../../styles/login.css';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);


    const [ formValues, handleInputChange ] = useForm({ email: '', password: '', });
    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState(false);
    const [ errorMessage, setErrorMessage]  = useState('');

    const { email, password } = formValues;

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setError(false);

        if( email.trim() === '' || password.trim() === '' ) {
            setError( true );
            setErrorMessage('All fields are required');
            return;
        }

        if ( email.trim() !== 'challenge@alkemy.org' || password.trim() !== 'react' ) {
            setLoading(true);
            setTimeout(() => {
                setError( true );
                setLoading(false);
                setErrorMessage('Invalid credentials');
            }, 1000);

            return;
        }

        setError( false );
        setLoading(true);
        setTimeout(() => {
            dispatch({
                type: types.login,
            });
            history.replace('/home'); 
        }, 1000);    
        

        /* const data = await getAuth( formValues ); */
    };

    return (
        <div className="login-dark">
            <form 
                onSubmit={ handleSubmit }
            >
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>

                { 
                    (error)
                    ? <div className="alert alert-danger"> { errorMessage } </div>
                    : null
                }

                {
                    ( loading )
                        ?   <div className="text-center mb-3">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                        : null
                }

                <div className="form-group">
                    <input 
                        autoComplete="off"
                        className="form-control" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}
