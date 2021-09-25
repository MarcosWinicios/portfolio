import './styles.css';

import java from '../../assets/img/technologies/java.svg';

const Skills = () => {
    return (
        <section id="skills" className="page">
            <div className="page-container">
                <h1 className="title-page">Conhecimento</h1>
                <div className="skills-container">
                    <h3 className="topic-skil">Habilidades</h3>
                    <ul className="panel">
                        <li><p>Lógia de Programação</p></li>
                        <li><p>Programação Orientada a Objetos</p></li>
                        <li><p>Banco de Dados Relacionais (SQL)</p></li>
                        <li><p>Versionamento com Git e GitHub</p></li>
                        <li><p>Documentação UML</p></li>
                        <li><p>Desenvolvimento Básido de REST API com Springboot</p></li>
                        <li><p>Desenvolvimento front-end</p></li>
                        <li><p>Desenvolvimento back-end</p></li>
                    </ul>

                    <h3 className="topic-skills">Tecnologias</h3>
                    <ul className="technologies-container panel">
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={java} alt="Java" width="100" height="100" />
                                <figcaption>Java</figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;