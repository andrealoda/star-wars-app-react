import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPersonaggi } from '../services/api';

function PersonaggiList() {
    const [personaggi, setPersonaggi] = useState([]);

    useEffect(() => {
        getPersonaggi().then(data => {
            setPersonaggi(data);
        });
    }, []);

    return (
        <div>
            <h1>Personaggi</h1>
            <div className="row">
                {personaggi.map(persona => (
                    <div className="col-md-4 mb-3" key={persona.id}>
                        <div className="card h-100">
                            <img
                                src={persona.immagine ? `http://localhost:8000/storage/${persona.immagine}` : '/img/placeholder-personaggio-thumb.png'}
                                className="card-img-top img-thumbnail"
                                alt={persona.nome}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{persona.nome}</h5>
                                <Link to={`/personaggi/${persona.id}`} className="btn btn-primary">Dettagli</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonaggiList;