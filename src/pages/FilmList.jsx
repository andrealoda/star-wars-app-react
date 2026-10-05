import { useState, useEffect } from "react";
import { getFilms, STORAGE_URL } from "../services/api";
import DetailButton from "../components/DetailButton";
import Loader from "../components/Loader";
import NotFound from "./NotFound";


function FilmList() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getFilms()
      .then(data => {
        if (data) {
          setFilms(data);
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
      <h1>Film</h1>
      <div className="row">
        {films.map(film => (
          <div className="col-md-4 mb-3" key={film.id}>
            <div className="card h-100">
              <img
                src={film.immagine ? `${STORAGE_URL}/${film.immagine}` : '/img/placeholder-film-thumb.png'}
                className="card-img-top img-thumbnail"
                alt={film.titolo}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{film.titolo}</h5>
                <DetailButton to={`/film/${film.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;