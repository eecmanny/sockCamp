import { Link } from 'react-router-dom';
import './signup.css';
import PageBackground from '../../antDcustoms/background';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations';
import { useState } from 'react';

function Signup() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const [login] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { 
                    username: formState.username,
                    email: formState.email,
                    password: formState.password,
            }});
            

            if (data) {
                await login({
                    variables: { 
                        email: formState.email,
                        password: formState.password, },
                });

                localStorage.setItem('id_token', data.login.token);
            } else {
                console.log('Signup failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="SignupPageBackground">
            <div>
                <PageBackground />
                {/* <img src="./public/sockcampwelcome.jpg" alt="laptop background image"></img> */}
            </div>
            <form className="signupCard" onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign up</h1>
                    <p>Please create an account to begin.</p>
                    <hr />
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/home">back to the homepage.</Link>
                        </p>
                    ) : (

                        <div className="signupBoxes">
                            <label htmlFor="email">
                                <b>Email</b>
                            </label>
                            {/* <input type="text" placeholder="Enter Email" name="email" required /> */}
                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />

                            <label htmlFor="username">
                                <b>Username</b>
                            </label>
                            {/* <input type="text" placeholder="Enter Username" name="username" required /> */}
                            <input

                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="text"
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            {/* <input type="password" placeholder="Enter Password" name="psw" required /> */}
                            <input
                                className="form-input"
                                placeholder="************"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />

                            {/* <label htmlFor="psw-repeat">
                            <b>Repeat Password</b>
                        </label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}

                            {/* <label>
                            <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me
                        </label> */}

                            <p>
                                By creating an account you agree to our <a href="#!" style={{ color: 'dodgerblue' }}>
                                    Terms & Privacy
                                </a>
                                .
                            </p>


                            <div className="clearfix">
                                <Link to="/">
                                <button type="button" className="cancelbtn">
                                    <h3>Cancel</h3>
                                </button>
                                </Link>
                              
                                <button type="submit" className="signupbtn">
                                    <h3>Sign Up</h3>
                                </button>
                      
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}

export default Signup;
