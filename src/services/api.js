const API_URL = import.meta.env.VITE_API_URL;

function getData(endpoint) {
    return fetch(`${API_URL}/${endpoint}`)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error('Errore nella richiesta API:', error));
}


//funzioni che costruiscono la stringa di endpoint che poi viene passata a getData che la interpola in API_URL/endpoint


export function getFilms() {
  return getData('films');
}
// restituisce film che poi viene interpolata in API_URL/film

export function getFilm(id) {
  return getData(`films/${id}`);
}
// restituisce film/3 se ad esempio id = 3 che poi viene interpolata in API_URL/film/3


export function getPersonaggi() {
  return getData('people');
}

export function getPersonaggio(id) {
  return getData(`people/${id}`);
}

export function getSpecie() {
  return getData('species');
}

export function getSpecieSingola(id) {
  return getData(`species/${id}`);
}

export function getPianeti() {
  return getData('planets');
}

export function getPianeta(id) {
  return getData(`planets/${id}`);
}