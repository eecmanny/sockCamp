import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    return (
        <form>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please create an account to begin.</p>
                <hr />

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
                    <button type="button" className="cancelbtn">
                        Cancel
                    </button>
                    <button type="submit" className="signupbtn">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Signup;
