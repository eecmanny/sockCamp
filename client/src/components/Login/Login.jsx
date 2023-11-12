import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <form>
            <div className="Login">
                <h1>Login</h1>
                <p>Happy Coding!</p>
                <hr />

                {/* <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" required /> */}
<section className="loginCard">
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
                    </Link>                    </div>
    </card>

</section>

            </div>
        </form>
    );
}

export default Login;
