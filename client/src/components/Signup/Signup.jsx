import { Link } from 'react-router-dom';
import './signup.css';
import PageBackground from '../../antDcustoms/background.jsx';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { useState } from 'react';
import Auth from '../../utils/auth';

function Signup() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="SignupPageBackground">
            <div>
                <PageBackground />
                {/* <img src="./public/sockcampwelcome.jpg" alt="laptop background image"></img> */}
            </div>
            <form className="signupCard">
                <div className="container">
                    <h1>Sign up</h1>
                    <p>Please create an account to begin.</p>
                    <hr />
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (

                        <form className="signupBoxes" onSubmit={handleFormSubmit}>
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
                                value={formState.name}
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

                            <label>
                            <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me
                        </label>

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
                                <Link to="/home">
                                <button type="submit" className="signupbtn">
                                    <h3>Sign Up</h3>
                                </button>
                                </Link>
                            </div>
                        </form>
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
