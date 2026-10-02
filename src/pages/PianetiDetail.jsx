import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPianeta } from '../services/api';
import Loader from '../components/Loader';

function PianetiDetail() {
  const { id } = useParams();
  const [pianeta, setPianeta] = useState(null);

  useEffect(() => {
    getPianeta(id).then(data => {
      setPianeta(data);
    });
  }, [id]);

  if (!pianeta) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{pianeta.nome}</h1>
      <img
        src={pianeta.immagine ? `http://localhost:8000/storage/${pianeta.immagine}` : '/img/placeholder-pianeta.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={pianeta.nome}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p><strong>Clima:</strong> {pianeta.clima}</p>
      <p><strong>Terreno:</strong> {pianeta.terreno}</p>
      <p><strong>Popolazione:</strong> {pianeta.popolazione}</p>

      <h3>Abitanti</h3>
      <ul>
        {pianeta.people.map(persona => (
          <li key={persona.id}>
            <Link to={`/personaggi/${persona.id}`}>{persona.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PianetiDetail;