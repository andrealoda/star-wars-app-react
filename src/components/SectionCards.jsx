import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFilms, getPersonaggi, getSpecie, getPianeti } from '../services/api';

function SectionCards() {
    const [nFilm, setNFilm] = useState(null);
    const [nPersonaggi, setNPersonaggi] = useState(null);
    const [nSpecie, setNSpecie] = useState(null);
    const [nPianeti, setNPianeti] = useState(null);

    useEffect(() => {
        getFilms().then(data => setNFilm(data ? data.length : null));
        getPersonaggi().then(data => setNPersonaggi(data ? data.length : null));
        getSpecie().then(data => setNSpecie(data ? data.length : null));
        getPianeti().then(data => setNPianeti(data ? data.length : null));
    }, []);

    const sezioni = [
        { titolo: 'Film', icona: 'bi-film', percorso: '/film', testo: 'I sei episodi della saga', numero: nFilm },
        { titolo: 'Personaggi', icona: 'bi-person-lines-fill', percorso: '/personaggi', testo: 'Eroi, nemici e comprimari', numero: nPersonaggi },
        { titolo: 'Specie', icona: 'bi-bug-fill', percorso: '/specie', testo: 'Le forme di vita della galassia', numero: nSpecie },
        { titolo: 'Pianeti', icona: 'bi-globe-europe-africa', percorso: '/pianeti', testo: 'Mondi da esplorare', numero: nPianeti },
    ];

    return (
        <section id="sezioni" className="container py-5">
            <h2 className="text-center mb-4">Esplora l'archivio</h2>
            <div className="row g-4">
                {sezioni.map(sezione => (
                    <div className="col-12 col-md-6 col-lg-3" key={sezione.titolo}>
                        <Link to={sezione.percorso} className="card section-card h-100 text-center text-decoration-none">
                            <div className="card-body d-flex flex-column align-items-center">
                                <i className={`bi ${sezione.icona}`} style={{ fontSize: '3rem' }}></i>
                                <h3 className="h5 mt-3">{sezione.titolo}</h3>
                                <p className="text-secondary small">{sezione.testo}</p>
                                {sezione.numero !== null && (
                                    <p className="display-6 mb-0 mt-auto">{sezione.numero}</p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionCards;