import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FilmList from './pages/FilmList';
import FilmDetail from './pages/FilmDetail';
import PersonaggiList from './pages/PersonaggiList';
import PersonaggiDetail from './pages/PersonaggiDetail';
import SpecieList from './pages/SpecieList';
import SpecieDetail from './pages/SpecieDetail';
import PianetiList from './pages/PianetiList';
import PianetiDetail from './pages/PianetiDetail';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">

        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<PageContainer />}>
              <Route path="/film" element={<FilmList />} />
              <Route path="/film/:id" element={<FilmDetail />} />
              <Route path="/personaggi" element={<PersonaggiList />} />
              <Route path="/personaggi/:id" element={<PersonaggiDetail />} />
              <Route path="/specie" element={<SpecieList />} />
              <Route path="/specie/:id" element={<SpecieDetail />} />
              <Route path="/pianeti" element={<PianetiList />} />
              <Route path="/pianeti/:id" element={<PianetiDetail />} />
            </Route>
          </Routes>

        </main>

        <Footer />
        
      </div>
    </BrowserRouter >
  );
}

export default App;
