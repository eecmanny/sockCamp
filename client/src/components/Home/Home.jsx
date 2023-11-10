import  { Link } from 'react-router-dom';
import "./home.css"

function Home() {
    return (
        <div className="Home">
            <h1>SOCKCAMP</h1>
            <h2>Pre-BootCamp</h2>
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

export default Home;