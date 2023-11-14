import { Link } from 'react-router-dom';
import "./welcome.css"
import PageBackground from '../../antDcustoms/background.jsx';

// Comment
function Welcome() {
    return (
        <div className="WelcomePageBackground">
            <div>
                <PageBackground />
                {/* <img src="./public/sockcampcoding.jpg" alt="laptop background image"></img> */}
            </div>
            <div className="Welcome">
                <h2>
                    Welcome to Sock Camp.

                </h2>

                <p>
                    We are a pre-bootcamp for those who want to learn how to code.  We will teach you the basics of HTML, CSS, and JavaScript.
                </p>
                <p>
                    Please login or signup to get started.
                </p>
                <div className="buttons">
                    <div>
                        <Link to="/login">
                            <button className="button1">
                                <h3>LOGIN</h3>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/signup">
                            <button className="button1">
                                <h3>SIGNUP</h3>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;