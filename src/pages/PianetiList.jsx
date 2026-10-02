import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPianeti } from '../services/api';

function PianetiList() {
  const [pianeti, setPianeti] = useState([]);

  useEffect(() => {
    getPianeti().then(data => {
      setPianeti(data);
    });
  }, []);

  return (
    <div>
      <h1>Pianeti</h1>
      <div className="row">
        {pianeti.map(pianeta => (
          <div className="col-md-4 mb-3" key={pianeta.id}>
            <div className="card h-100">
              <img
                src={pianeta.immagine ? `http://localhost:8000/storage/${pianeta.immagine}` : '/img/placeholder-pianeta-thumb.png'}
                className="card-img-top img-thumbnail"
                alt={pianeta.nome}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{pianeta.nome}</h5>
                <Link to={`/pianeti/${pianeta.id}`} className="btn btn-primary">Dettagli</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PianetiList;