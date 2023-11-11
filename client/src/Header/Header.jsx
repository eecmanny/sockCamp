import { Link, useLocation } from 'react-router-dom';
import "./header.css"
import { useTypeFx } from "../hooks/typerFx";


function Header() {
    const location = useLocation();
    const textHeader = useTypeFx("{SOCK CAMP}", 250);

    return (
        <header className="header">
            <main className='headerBar'>
                <section className='headerLogo'>
                    <h1>{textHeader}<br/></h1>
                    <h2>Pre-Bootcamp</h2>
                </section>
                <section className='logout'>
                    <button>
                        <Link to="/">
                        </Link>
                        <h3>
                            Logout
                        </h3>
                    </button>
                </section>
            </main>


            {location.pathname !== '/' && (
                <nav className='navbar'>
                    <ul className='navButtons'>
                    <li className="navSingleButton">
                            <Link to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="navSingleButton">
                            <Link to="/html">
                                HTML
                            </Link>
                        </li>
                        <li className="navSingleButton">
                            <Link to="/css">
                                CSS
                            </Link>
                        </li>
                        <li className="navSingleButton">
                            <Link to="/javascript">
                                JavaScript
                            </Link>
                        </li>
                        <li className="navSingleButton">
                            <Link to="/react">
                                React
                            </Link>
                        </li>
                        <li className="navSingleButton">
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
