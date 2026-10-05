import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSpecieSingola } from '../services/api';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';

function SpecieDetail() {
  const { id } = useParams();
  const [specie, setSpecie] = useState(null);

  useEffect(() => {
    getSpecieSingola(id).then(data => {
      setSpecie(data);
    });
  }, [id]);

  if (!specie) {
    return <Loader />;
  }

  return (
    <div>
      <BackButton to="/specie" />
      <h1>{specie.nome}</h1>
      <img
        src={specie.immagine ? `http://localhost:8000/storage/${specie.immagine}` : '/img/placeholder-specie.png'}
        className="img-fluid img-thumbnail mb-3"
        alt={specie.nome}
        style={{ maxHeight: '300px', objectFit: 'contain' }}
      />
      <p><strong>Lingua:</strong> {specie.lingua}</p>

      <h3>Personaggi di questa specie</h3>
      <ul>
        {specie.people.map(persona => (
          <li key={persona.id}>
            <Link to={`/personaggi/${persona.id}`}>{persona.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecieDetail;