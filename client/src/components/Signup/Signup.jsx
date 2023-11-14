import { Link } from 'react-router-dom';
import './signup.css';
import PageBackground from '../../antDcustoms/background.jsx';

function Signup() {
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
                    <card className="signupBoxes">
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label htmlFor="username">
                            <b>Username</b>
                        </label>
                        <input type="text" placeholder="Enter Username" name="username" required />

                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <label htmlFor="psw-repeat">
                            <b>Repeat Password</b>
                        </label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

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
                    </card>
                </div>

            </form>
        </div>
    );
}

export default Signup;
