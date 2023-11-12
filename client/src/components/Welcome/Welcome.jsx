import { Link } from 'react-router-dom';
import "./welcome.css"

// Comment
function Welcome() {
    return (
        <div className="Welcome">
            {/* <h1>SOCKCAMP</h1>
            <h2>Pre-BootCamp</h2> */}
            <p>
                Because you must put your sock on, before you put your boot on.
            </p>
            <div>
                <button>
                    <Link to="/">
                        Login
                    </Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="/">
                        Signup
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Welcome;