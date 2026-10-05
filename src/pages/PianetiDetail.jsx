import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPianeta, STORAGE_URL } from '../services/api';
import Loader from '../components/Loader';
import NotFound from './NotFound';
import BackButton from '../components/BackButton';

function PianetiDetail() {
  const { id } = useParams();
  const [pianeta, setPianeta] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getPianeta(id).then(data => {
      if (data) {
        setPianeta(data);
      } else {
        setNotFound(true);
      }
    });
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  if (!pianeta) {
    return <Loader />;
  }

  return (
    <div>
      <BackButton to="/pianeti" />
      <h1>{pianeta.nome}</h1>
      <img
        src={pianeta.immagine ? `${STORAGE_URL}/${pianeta.immagine}` : '/img/placeholder-pianeta.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={pianeta.nome}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p><strong>Clima:</strong> {pianeta.clima}</p>
      <p><strong>Terreno:</strong> {pianeta.terreno}</p>
      <p><strong>Popolazione:</strong> {pianeta.popolazione}</p>

      {pianeta.people.length > 0 && (
        <>
          <h3>Abitanti</h3>
          <ul>
            {pianeta.people.map(persona => (
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

export default PianetiDetail;