import './login.css';
import '../../antDcustoms/background.css';
// import PageBackground from '../../antDcustoms/background.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login(props) {
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
                {/* <PageBackground /> */}
                <img className="page-background" src="/sockcampwelcome.jpg" alt="laptop background image"></img>
            </div>



            <form>
                <div className="Login">

                    {/* <label htmlFor="email">
                    <b>Email</b>
                    </label>
                <input type="text" placeholder="Enter Email" name="email" required /> */}

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
                            <card className="loginBoxes" onSubmit={handleFormSubmit}>


                                <label htmlFor="email">
                                    <b>email</b>
                                </label>
                                {/* <input type="text" placeholder="Enter email" name="email" required /> */}
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
                                {/* <input type="password" placeholder="Enter Password" name="psw" required /> */}
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                {/* 
                                <label>
                                    <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me
                                </label>                     */}
                                <div>
                                    {/* this divs used to be links */}
                                    <Link to="/home">
                                        <button className="button1">
                                            <h3>LOGIN</h3>
                                        </button>
                                    </Link>
                                    <Link to="/signup">
                                        <button className="button1">
                                            <h3>SIGNUP</h3>
                                        </button>
                                    </Link>
                                </div>

                            </card>
                        )}                                
                        {error && (
                                    <div className="my-3 p-3 bg-danger text-white">
                                        {error.message}
                                    </div>
                                )}
                    </section>


                    {/* <section className="loginCard">
                        <h1>Login</h1>
                        <p>Please log in to begin.</p>
                        <hr />
                        <card className="loginBoxes">
                            <label htmlFor="email">
                                <b>email</b>
                            </label>
                            <input type="text" placeholder="Enter email" name="email" required />

                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label>
                                <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me
                            </label>                    <div>
                                <Link to="/home">
                                    <button className="button1">
                                        <h3>LOGIN</h3>
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="button1">
                                        <h3>SIGNUP</h3>
                                    </button>
                                </Link>
                            </div>
                        </card>

                    </section> */}

                </div>
            </form>
        </main>
    );
}

export default Login;
