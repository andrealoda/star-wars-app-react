import { Link } from "react-router-dom";

const BACKOFFICE_URL = import.meta.env.VITE_BACKOFFICE_URL;

function Footer() {
    return (
        <footer className="bg-dark border-top mt-5" style={{ borderColor: 'var(--sw-border)' }}>
            <div className="container py-4">
                <div className="row gy-4">

                    {/* Colonna 1: la società (inventata) */}
                    <div className="col-md-6">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <img src="/img/logo-front.svg" alt="" height="32" />
                            <h2 className="h6 mb-0">Orbita Digital Archives Pvt. Ltd.</h2>
                        </div>
                        <p className="small text-secondary mb-2">
                            Archiviamo la galassia dal 2026.<br />
                            Software per la catalogazione di mondi, specie ed equipaggi.
                        </p>
                        <p className="small text-secondary mb-0">
                            <i className="bi bi-geo-alt me-1"></i>Bengaluru, Karnataka, India<br />
                            <i className="bi bi-envelope me-1"></i>info@example.com
                        </p>
                    </div>

                    {/* Colonna 2: link alle sezioni e al backoffice */}
                    <div className="col-md-6">
                        <h2 className="h6 mb-3">Navigazione</h2>
                        <ul className="list-unstyled small mb-0">
                            <li className="mb-2">
                                <Link className="link-secondary text-decoration-none" to="/film">
                                    <i className="bi bi-film me-2"></i>Film
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link-secondary text-decoration-none" to="/personaggi">
                                    <i className="bi bi-person-lines-fill me-2"></i>Personaggi
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link-secondary text-decoration-none" to="/specie">
                                    <i className="bi bi-bug-fill me-2"></i>Specie
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link-secondary text-decoration-none" to="/pianeti">
                                    <i className="bi bi-globe-europe-africa me-2"></i>Pianeti
                                </Link>
                            </li>
                            <li>
                                <a className="link-secondary text-decoration-none" href={BACKOFFICE_URL}>
                                    <i className="bi bi-gear-fill me-2"></i>Backoffice
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
