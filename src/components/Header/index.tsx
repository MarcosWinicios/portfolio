import 'components/Header/styles.css';

const Header = () => {
    return (
        <header className="page">
            <div className="page-container">
                <div className="logo">
                    <a href="#landing-page">MW</a>
                </div>
                <nav className="flex">
                    <a href="#landing-page"><p>Home</p></a>
                    <a href="#about"><p>Sobre</p></a>
                    <a href="#education"><p>Educação</p></a>
                    <a href="#skills"><p>Habilidades</p></a>
                    <a href="#projects"><p>Projetos</p></a>
                    <a href="#contact"><p>Contato</p></a>
                </nav>
            </div>
        </header>
    );
}

export default Header;