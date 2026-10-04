import { Link } from 'react-router-dom';

// Pulsante "Dettagli": riceve in "to" il percorso della pagina di dettaglio.
// Se non gli passo un testo, scrive "Dettagli".
function DetailButton({ to, children = 'Dettagli' }) {
    return (
        <Link to={to} className="btn btn-holo btn-sm d-inline-flex align-items-center gap-2">
            {children}
            <i className="bi bi-arrow-right"></i>
        </Link>
    );
}

export default DetailButton;
