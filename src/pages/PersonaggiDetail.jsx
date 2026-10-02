import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPersonaggio } from '../services/api';
import Loader from '../components/Loader';

function PersonaggiDetail() {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    getPersonaggio(id).then(data => {
      setPersona(data);
    });
  }, [id]);

  if (!persona) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{persona.nome}</h1>
      <img
        src={persona.immagine ? `http://localhost:8000/storage/${persona.immagine}` : '/img/placeholder-personaggio.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={persona.nome}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p><strong>Altezza:</strong> {persona.altezza}</p>
      <p><strong>Peso:</strong> {persona.peso}</p>
      <p><strong>Colore capelli:</strong> {persona.colore_capelli}</p>
      <p><strong>Colore occhi:</strong> {persona.colore_occhi}</p>
      <p><strong>Anno di nascita:</strong> {persona.anno_nascita}</p>
      <p><strong>Genere:</strong> {persona.genere}</p>

      {persona.planet && (
        <p>
          <strong>Pianeta natale:</strong>{' '}
          <Link to={`/pianeti/${persona.planet.id}`}>{persona.planet.nome}</Link>
        </p>
      )}

      {persona.species && (
        <p>
          <strong>Specie:</strong>{' '}
          <Link to={`/specie/${persona.species.id}`}>{persona.species.nome}</Link>
        </p>
      )}
    </div>
  );
}

export default PersonaggiDetail;