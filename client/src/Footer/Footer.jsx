import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login' && (
                <div className="footerBar">
                    <div>
                        <h2>Sock Camp 2023 / Final Bootcamp Project</h2>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;