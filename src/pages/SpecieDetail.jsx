import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSpecieSingola, STORAGE_URL } from '../services/api';
import Loader from '../components/Loader';
import NotFound from './NotFound';
import BackButton from '../components/BackButton';

function SpecieDetail() {
  const { id } = useParams();
  const [specie, setSpecie] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getSpecieSingola(id).then(data => {
      if (data) {
        setSpecie(data);
      } else {
        setNotFound(true);
      }
    });
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  if (!specie) {
    return <Loader />;
  }

  return (
    <div>
      <BackButton to="/specie" />
      <h1>{specie.nome}</h1>
      <img
        src={specie.immagine ? `${STORAGE_URL}/${specie.immagine}` : '/img/placeholder-specie.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={specie.nome}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p><strong>Lingua:</strong> {specie.lingua}</p>

      {specie.people.length > 0 && (
        <>
          <h3>Personaggi di questa specie</h3>
          <ul>
            {specie.people.map(persona => (
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

export default SpecieDetail;