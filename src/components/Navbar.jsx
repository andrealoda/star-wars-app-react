import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Star Wars App</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/film">Film</Link>
                    <Link className="nav-link" to="/personaggi">Personaggi</Link>
                    <Link className="nav-link" to="/specie">Specie</Link>
                    <Link className="nav-link" to="/pianeti">Pianeti</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;