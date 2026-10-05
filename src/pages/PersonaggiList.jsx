import { useState, useEffect } from 'react';
import { getPersonaggi, STORAGE_URL } from '../services/api';
import DetailButton from "../components/DetailButton";
import Loader from "../components/Loader";
import NotFound from "./NotFound";

function PersonaggiList() {
    const [personaggi, setPersonaggi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        getPersonaggi()
            .then(data => {
                if (data) {
                    setPersonaggi(data);
                } else {
                    setNotFound(true);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (notFound) {
        return <NotFound />;
    }



    return (
        <div>
            <h1>Personaggi</h1>
            <div className="row">
                {personaggi.map(persona => (
                    <div className="col-md-4 mb-3" key={persona.id}>
                        <div className="card h-100">
                            <img
                                src={persona.immagine ? `${STORAGE_URL}/${persona.immagine}` : '/img/placeholder-personaggio-thumb.png'}
                                className="card-img-top img-thumbnail"
                                alt={persona.nome}
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{persona.nome}</h5>
                                <DetailButton to={`/personaggi/${persona.id}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonaggiList;