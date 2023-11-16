import './login.css';
import PageBackground from '../../antDcustoms/background';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import decode from 'jwt-decode';

import Auth from '../../utils/auth';

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };


    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className="LoginPageBackground">
            <div>
                <PageBackground />
                {/* <img src="./public/sockcampwelcome.jpg" alt="laptop background image"></img> */}
            </div>

            <form onSubmit={handleFormSubmit}>
                <div className="Login">
                    <section className="loginCard">
                        <h1>Login</h1>
                        <p>Please log in to begin.</p>
                        <hr />

                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/home">back to the homepage.</Link>
                            </p>
                        ) : (
                            <div className="loginBoxes"> 
                                <label htmlFor="email">
                                    <b>email</b>
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />

                                <label htmlFor="psw">
                                    <b>Password</b>
                                </label>
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />

                                <div>
                                    <button className="button1" type="submit">
                                        <h3>Login</h3>
                                    </button>
                                    <Link to="/signup">
                                        <button className="button1">
                                            <h3>Signup</h3>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </section>
                </div>
            </form>
        </main>
    );
}

export default Login;
