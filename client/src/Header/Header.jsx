import { Link, useLocation } from 'react-router-dom';
import "./header.css"
import { useTypeFx } from "../hooks/typerFx";


function Header() {
    const location = useLocation();
    const textHeader = useTypeFx("{SOCK CAMP}", 270);

    return (

        <header className="header">
            {
                location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && (
                    <main className='headerBar'>
                        <section className='headerLogo'>
                            <h1>{textHeader}</h1>
                            {/* <h2>PRE-BOOTCAMP</h2> */}
                        </section>

                        <section className='logout logoutButton'>
                            <Link to="/">
                                <button>


                                    <h3>
                                        Logout
                                    </h3>
                                </button>
                            </Link>
                        </section>
                    </main>
                )}


            {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login' && (
                <nav className='navbar'>
                    <ul className='navButtons'>
                        <Link to="/home">
                            <li className="navSingleButton" >
                                <h3>Home</h3>
                            </li>
                        </Link>
                        <Link to="/html">
                            <li className="navSingleButton">
                                <h3>HTML</h3>
                            </li>
                        </Link>
                        <Link to="/css">
                            <li className="navSingleButton">
                                <h3>CSS</h3>
                            </li>
                        </Link>
                        <Link to="/javascript">
                            <li className="navSingleButton">
                                <h3>JavaScript</h3>
                            </li>
                        </Link>
                        <Link to="/react">
                            <li className="navSingleButton">
                                <h3>React</h3>
                            </li>
                        </Link>
                        <Link to="/quiz">
                            <li className="navSingleButton">
                                <h3>Quiz</h3>
                            </li>
                        </Link>
                    </ul>
                </nav>
            )}
        </header>
    );
};
export default Header;
