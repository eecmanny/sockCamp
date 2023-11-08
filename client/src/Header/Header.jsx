import  { Link } from 'react-router-dom';
import "./header.css"

function header() {
    return (
        <header className="header">
            <h1>SOCKCAMP</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/html">
                            HTML
                        </Link>
                    </li>
                    <li>
                        <Link to="/css">
                            CSS
                        </Link>
                    </li>
                    <li>
                        <Link to="/javascript">
                            JavaScript
                        </Link>
                    </li>
                    <li>
                        <Link to="/react">
                            React
                        </Link>
                    </li>
                    <li>
                        <Link to="/combo">
                            Combo
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default header;