import './styles.css';
const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <div className="page-container">
                    <h2 className="logo">MW</h2>
                    <nav className="footer-menu-navigation">
                        <a href="#landing-page"><p>Home</p></a>
                        <a href="#about"><p>Sobre</p></a>
                        <a href="#education"><p>Educação</p></a>
                        <a href="#skills"><p>Habilidades</p></a>
                        <a href="#projects"><p>Projetos</p></a>
                        <a href="#contact"><p>Contato</p></a>
                    </nav>
                    {/* <p>"Ninguém é sabe tanto a ponto de não precisar aprender e nem sabe tão pouco que não tenha nada a ensinar."</p> */}
                    <nav className="footer-contacts">
                        <a href="">rede 1</a>
                        <a href="">rede 1</a>
                        <a href="">rede 1</a>
                        <a href="">rede 1</a>
                        <a href="">rede 1</a>
                    </nav>
                </div>
            </div>
            <div className="bottom-footer">
                <span>Site desenvolvido por Marcos Winicios &#169; </span>
            </div>
        </footer>
    );
}

export default Footer