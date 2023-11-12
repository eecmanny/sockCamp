import { Link } from 'react-router-dom';
import "./welcome.css"

// Comment
function Welcome() {
    return (
        <div className="Welcome">
            {/* <img src="sockcampcoding.jpg"/> */}
            {/* <h1>SOCKCAMP</h1>
            <h2>Pre-BootCamp</h2> */}
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
                    <Link to="/">
                <button className="button1">
                        <h3>LOGIN</h3>
                </button>
                    </Link>
            </div>
            <div>
                    <Link to="/">
                <button className="button1">
                        <h3>SIGNUP</h3>
                </button>
                    </Link>
            </div>
            </div>
        </div>
    );
}

export default Welcome;