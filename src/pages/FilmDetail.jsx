import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilm } from '../services/api';

import Loader from '../components/Loader';

function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    getFilm(id).then(data => {
      setFilm(data);
    });
  }, [id]);

  if (!film) {
    return <Loader />
  }

  return (
    <div>
      <h1>{film.titolo}</h1>
      <img
        src={film.immagine ? `http://localhost:8000/storage/${film.immagine}` : '/img/placeholder-film.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={film.titolo}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p>{film.sinossi}</p>
      <p><strong>Episodio:</strong> {film.episodio}</p>
      <p><strong>Regista:</strong> {film.regista}</p>
      <p><strong>Data di uscita:</strong> {film.data_uscita}</p>

      <h3>Personaggi</h3>
      <ul>
        {film.people.map(persona => (
          <li key={persona.id}>
            <Link to={`/personaggi/${persona.id}`}>{persona.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmDetail;