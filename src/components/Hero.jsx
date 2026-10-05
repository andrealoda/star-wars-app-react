const heroVideo = import.meta.env.VITE_HERO_VIDEO || '/video/hero-default.mp4';

function Hero() {
    return (
        <section className="hero">
            <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline />
            <div className="hero-overlay"></div>

            <div className="hero-content container text-center">
                <img src="/img/logo-front.svg" alt="" height="96" className="mb-3" />
                <h1 className="display-3 mb-1">Holocron</h1>
                <p className="text-uppercase text-secondary mb-4" style={{ letterSpacing: '0.5em', fontSize: '0.8rem' }}>
                    Archivio Galattico
                </p>
                <p className="lead mb-4">
                    Film, personaggi, specie e pianeti della galassia Star Wars, in un unico archivio.
                </p>
                <a href="#sezioni" className="btn btn-primary btn-lg me-2">Esplora l'archivio</a>

            </div>
        </section>
    );
}

export default Hero;