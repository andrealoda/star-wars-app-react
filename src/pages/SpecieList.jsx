import { useState, useEffect } from 'react';
import { getSpecie, STORAGE_URL } from '../services/api';
import DetailButton from "../components/DetailButton";
import Loader from "../components/Loader";
import NotFound from "./NotFound";

function SpecieList() {
  const [specie, setSpecie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getSpecie()
      .then(data => {
        if (data) {
          setSpecie(data);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (notFound) {
    return <NotFound />;
  }


  return (
    <div>
      <h1>Specie</h1>
      <div className="row">
        {specie.map(singolaSpecie => (
          <div className="col-md-4 mb-3" key={singolaSpecie.id}>
            <div className="card h-100">
              <img
                src={singolaSpecie.immagine ? `${STORAGE_URL}/${singolaSpecie.immagine}` : '/img/placeholder-specie-thumb.png'}
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