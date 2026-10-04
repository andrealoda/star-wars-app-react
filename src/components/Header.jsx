import { Link } from "react-router-dom";

const BACKOFFICE_URL = import.meta.env.VITE_BACKOFFICE_URL;

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src="/img/logo-front.svg" alt="" height="40" />
                    <span className="d-flex flex-column lh-1">
                        <span className="fs-5">Holocron</span>
                        <small
                            className="text-uppercase text-secondary"
                            style={{ fontSize: '0.5rem', letterSpacing: '0.4em', fontFamily: "'Exo 2', sans-serif" }}
                        >
                            Archivio Galattico
                        </small>
                    </span>
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/film">
                        <i className="bi bi-film me-2"></i>Film
                    </Link>
                    <Link className="nav-link" to="/personaggi">
                        <i className="bi bi-person-lines-fill me-2"></i>Personaggi
                    </Link>
                    <Link className="nav-link" to="/specie">
                        <i className="bi bi-bug-fill me-2"></i>Specie
                    </Link>
                    <Link className="nav-link" to="/pianeti">
                        <i className="bi bi-globe-europe-africa me-2"></i>Pianeti
                    </Link>

                    {/* serve un anchor tag perchè non è un link interno, ma porta fuori dalla app. */}
                    <a
                        className="btn btn-sm ms-auto d-flex align-items-center gap-2"
                        href={BACKOFFICE_URL}
                        title="Vai al backoffice"
                    >
                        <i className="bi bi-gear-fill text-primary"></i>

                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;


