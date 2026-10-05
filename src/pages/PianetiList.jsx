import { useState, useEffect } from 'react';
import { getPianeti, STORAGE_URL } from '../services/api';
import DetailButton from "../components/DetailButton";
import Loader from "../components/Loader";
import NotFound from "./NotFound";

function PianetiList() {
  const [pianeti, setPianeti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getPianeti()
      .then(data => {
        if (data) {
          setPianeti(data);
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
      <h1>Pianeti</h1>
      <div className="row">
        {pianeti.map(pianeta => (
          <div className="col-md-4 mb-3" key={pianeta.id}>
            <div className="card h-100">
              <img
                src={pianeta.immagine ? `${STORAGE_URL}/${pianeta.immagine}` : '/img/placeholder-pianeta-thumb.png'}
                className="card-img-top img-thumbnail"
                alt={pianeta.nome}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{pianeta.nome}</h5>
                <DetailButton to={`/pianeti/${pianeta.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PianetiList;