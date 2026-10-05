import { Link } from 'react-router-dom';

// Pulsante "Torna alla lista": riceve in "to" il percorso della lista da cui si arriva.
function BackButton({ to }) {
    return (
        <Link to={to} className="btn btn-holo btn-sm d-inline-flex align-items-center gap-2 mb-3">
            <i className="bi bi-arrow-left"></i>
            Torna alla lista
        </Link>
    );
}

export default BackButton;
