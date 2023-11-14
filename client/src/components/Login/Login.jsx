import { Link } from 'react-router-dom';
import './login.css';
import PageBackground from '../../antDcustoms/background.jsx';

function Login() {
    return (
        <div className="LoginPageBackground">
            <div>
                <PageBackground />
                {/* <img src="./public/sockcampwelcome.jpg" alt="laptop background image"></img> */}
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
                    <hr/>
                        <card className="loginBoxes">
                            <label htmlFor="username">
                                <b>Username</b>
                            </label>
                            <input type="text" placeholder="Enter Username" name="username" required />

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

                    </section>

                </div>
            </form>
        </div>
    );
}

export default Login;
