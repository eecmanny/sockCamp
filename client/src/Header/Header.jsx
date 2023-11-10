import { Link, useLocation } from 'react-router-dom';
import "./header.css"

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <h1>SOCKCAMP</h1>
            <h2>Pre-Bootcamp</h2>
            {location.pathname !== '/' && (
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
            )}
        </header>
    );
};
export default Header;
