import { VscFoldDown } from 'react-icons/vsc'

import './styles.css';
const LandingPage = () => {
    return (
        <>
            <section id="landing-page" className="page" >
                <div className="page-container">
                    <h1 className="main-text">Olá, eu sou o Marcos Winicios</h1>
                    <h3 className="secoundary-text">Um desenvolvedor web</h3>

                    <div className="down-icon-container">
                        <a href="#about">
                            <VscFoldDown className="down-icon" />
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}
export default LandingPage;