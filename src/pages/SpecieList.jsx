import { useState, useEffect } from 'react';
import { getSpecie } from '../services/api';
import DetailButton from "../components/DetailButton";

function SpecieList() {
  const [specie, setSpecie] = useState([]);

  useEffect(() => {
    getSpecie().then(data => {
      setSpecie(data);
    });
  }, []);

  return (
    <div>
      <h1>Specie</h1>
      <div className="row">
        {specie.map(singolaSpecie => (
          <div className="col-md-4 mb-3" key={singolaSpecie.id}>
            <div className="card h-100">
              <img
                src={singolaSpecie.immagine ? `http://localhost:8000/storage/${singolaSpecie.immagine}` : '/img/placeholder-specie-thumb.png'}
                className="card-img-top img-thumbnail"
                alt={singolaSpecie.nome}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{singolaSpecie.nome}</h5>
                <DetailButton to={`/specie/${singolaSpecie.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecieList;