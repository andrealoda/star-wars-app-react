import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="text-center py-5">
            <h1 className="display-1">404</h1>
            <p className="lead">Questa pagina non esiste o non è raggiungibile.</p>
            <Link to="/" className="btn btn-holo btn-sm d-inline-flex align-items-center gap-2">
                <i className="bi bi-house"></i>
                Torna alla home
            </Link>
        </div>
    );
}

export default NotFound;
