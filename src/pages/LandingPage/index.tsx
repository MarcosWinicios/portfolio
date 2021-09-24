import { VscFoldDown } from 'react-icons/vsc'

import './styles.css';
const LandingPage = () => {
    return (
        <section id="landing-page" className="page" >
            <div className="page-container">
                <h1 className="main-text">
                    Olá,<br /> EU SOU O MARCOS WINICIOS
                </h1>
                <p className="secoundary-text">Um desenvolvedor web em formação</p>
                <div className="down-icon-container">
                    <a href="#about"  >
                        <VscFoldDown className="down-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}
export default LandingPage;