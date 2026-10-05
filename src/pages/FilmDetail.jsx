import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilm, STORAGE_URL } from '../services/api';

import Loader from '../components/Loader';
import NotFound from './NotFound';
import BackButton from '../components/BackButton';

function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getFilm(id).then(data => {
      if (data) {
        setFilm(data);
      } else {
        setNotFound(true);
      }
    });
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  if (!film) {
    return <Loader />
  }

  return (
    <div>
      <BackButton to="/film" />
      <h1>{film.titolo}</h1>
      <img
        src={film.immagine ? `${STORAGE_URL}/${film.immagine}` : '/img/placeholder-film.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={film.titolo}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p>{film.sinossi}</p>
      <p><strong>Episodio:</strong> {film.episodio}</p>
      <p><strong>Regista:</strong> {film.regista}</p>
      <p><strong>Data di uscita:</strong> {film.data_uscita}</p>

      {film.people.length > 0 && (
        <>
          <h3>Personaggi</h3>
          <ul>
            {film.people.map(persona => (
              <li key={persona.id}>
                <Link to={`/personaggi/${persona.id}`}>{persona.nome}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default FilmDetail;