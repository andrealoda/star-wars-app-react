import { Link } from "react-router-dom";
import { Collapse } from "bootstrap";

const BACKOFFICE_URL = import.meta.env.VITE_BACKOFFICE_URL;

// su mobile, dopo un click su un link il menu aperto si richiude (usa l'API JavaScript di Bootstrap).
// Se il menu è già chiuso (da lg in su è sempre visibile) hide() non fa nulla.
function closeMenu() {
    Collapse.getOrCreateInstance(document.getElementById('main-menu'), { toggle: false }).hide();
}

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>
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

                {/* pulsante "hamburger": visibile solo sotto lg, gestito da Bootstrap */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                    aria-label="Apri o chiudi il menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="main-menu">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-link" to="/" onClick={closeMenu}>
                            <i className="bi bi-house me-2"></i>Home
                        </Link>
                        <Link className="nav-link" to="/film" onClick={closeMenu}>
                            <i className="bi bi-film me-2"></i>Film
                        </Link>
                        <Link className="nav-link" to="/personaggi" onClick={closeMenu}>
                            <i className="bi bi-person-lines-fill me-2"></i>Personaggi
                        </Link>
                        <Link className="nav-link" to="/specie" onClick={closeMenu}>
                            <i className="bi bi-bug-fill me-2"></i>Specie
                        </Link>
                        <Link className="nav-link" to="/pianeti" onClick={closeMenu}>
                            <i className="bi bi-globe-europe-africa me-2"></i>Pianeti
                        </Link>
                    </div>

                    <div className="navbar-nav">
                        {/* serve un anchor tag perchè non è un link interno, ma porta fuori dalla app. */}
                        <a className="nav-link" href={BACKOFFICE_URL}>
                            <i className="bi bi-gear-fill me-2"></i>Area riservata
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
