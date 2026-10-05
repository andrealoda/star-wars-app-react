# Holocron: sito pubblico (React)

Sito pubblico di **Holocron**, un archivio a tema Star Wars. Questo repository contiene il frontend in React: mostra film, personaggi, specie e pianeti leggendo i dati dalle API REST del backoffice Laravel.

Il backoffice e le API si trovano in un repository separato: [star-wars-app-php](https://github.com/andrealoda/star-wars-app-php). **Le API devono essere avviate** perché il sito mostri dei dati.

Progetto didattico realizzato per il corso Boolean. Star Wars è un marchio di Lucasfilm Ltd.: questo progetto non è affiliato né approvato da Lucasfilm o Disney.

## Cosa fa

- Home con video di sfondo e accesso alle quattro sezioni, con il numero di elementi presenti in ciascuna.
- Elenco e pagina di dettaglio per film, personaggi, specie e pianeti.
- Dettagli con le informazioni collegate: i personaggi di un film, il pianeta e la specie di un personaggio, gli abitanti di un pianeta.
- Pagina 404 per gli indirizzi sbagliati e per gli elementi non trovati.
- Interfaccia interamente in Bootstrap, con un tema scuro personalizzato.

## Tecnologie

React 19, Vite, React Router, Bootstrap 5 e Bootstrap Icons, `ldrs` per l'indicatore di caricamento.

## Installazione e avvio

Serve Node.js. Con il backoffice già in funzione su `http://localhost:8000`:

```bash
git clone https://github.com/andrealoda/star-wars-app-react.git
cd star-wars-app-react

npm install
npm run dev
```

Il sito si apre su `http://localhost:5173` (o su `5174` se la prima porta è occupata: entrambe sono ammesse dalla configurazione CORS del backoffice).

## Variabili d'ambiente

Il file `.env` è versionato e contiene i valori per lo sviluppo in locale. Dopo ogni modifica bisogna **riavviare** `npm run dev`.

| Variabile | Valore di default | A cosa serve |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:8000/api` | indirizzo delle API |
| `VITE_STORAGE_URL` | `http://localhost:8000/storage` | indirizzo da cui si leggono le immagini caricate dal backoffice |
| `VITE_BACKOFFICE_URL` | `http://localhost:8000` | destinazione dei link "Area riservata" |
| `VITE_HERO_VIDEO` | non impostata | video della home (vedi sotto) |

## Video della home

Il repository include solo `public/video/hero-default.mp4`, un campo di stelle creato da zero con uno script e quindi privo di diritti di terzi. Per provare un altro video, copialo in `public/video/` e crea un file `.env.local` (escluso da Git) con:

```
VITE_HERO_VIDEO=/video/nome-del-video.mp4
```

Tutti gli altri file in `public/video/` sono ignorati da Git, così i video scaricati da siti di stock non finiscono nel repository. Se la variabile non è impostata si usa il video predefinito. Finché il video non parte si vede lo sfondo scuro del sito.

## Immagini

Le immagini dei record arrivano dal backoffice e non sono in questo repository. Quando un elemento non ha un'immagine si mostra un segnaposto, presente in `public/img/`.

## Pagine

| Percorso | Pagina |
| --- | --- |
| `/` | home |
| `/film`, `/film/:id` | elenco e dettaglio dei film |
| `/personaggi`, `/personaggi/:id` | elenco e dettaglio dei personaggi |
| `/specie`, `/specie/:id` | elenco e dettaglio delle specie |
| `/pianeti`, `/pianeti/:id` | elenco e dettaglio dei pianeti |
| qualsiasi altro | pagina 404 |

## Struttura del codice

- `src/App.jsx`: rotte dell'applicazione; header e footer compaiono su tutte le pagine
- `src/pages/`: una pagina per ogni rotta
- `src/components/`: componenti riutilizzabili (`Header`, `Footer`, `Hero`, `SectionCards`, `DetailButton`, `BackButton`, `Loader`, `PageContainer`)
- `src/services/api.js`: tutte le chiamate alle API e gli indirizzi letti dal `.env`
- `src/index.css`: palette, font e personalizzazioni di Bootstrap
