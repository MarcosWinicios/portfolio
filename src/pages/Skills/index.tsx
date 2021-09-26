import './styles.css';

import html from '../../assets/img/technologies/html5.svg';
import java from '../../assets/img/technologies/java.svg';
import mysql from '../../assets/img/technologies/mysql.svg';
import springboot from '../../assets/img/technologies/springboot.svg';
import css from '../../assets/img/technologies/css-2.svg';
import git from '../../assets/img/technologies/git.svg';
import github from '../../assets/img/technologies/github.svg';
import reactjs from '../../assets/img/technologies/reactjs.svg';
import javascript from '../../assets/img/technologies/javascript.svg'
import hibernate from '../../assets/img/technologies/hibernate.svg'


const Skills = () => {
    return (
        <section id="skills" className="page space-top">
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
                                <img src={mysql} alt="Java" width="100" height="100" />
                                <figcaption>MySQL</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={html} alt="Java" width="100" height="100" />
                                <figcaption>HTML</figcaption>
                            </figure>
                        </li>

                        <li>
                            <figure className="item-skill-container">
                                <img src={css} alt="Java" width="100" height="100" />
                                <figcaption>CSS</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={javascript} alt="Java" width="100" height="100" />
                                <figcaption>JavaScript</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={git} alt="Java" width="100" height="100" />
                                <figcaption>GIT</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={springboot} alt="Java" width="100" height="100" />
                                <figcaption>Springboot</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={github} alt="Java" width="100" height="100" />
                                <figcaption>GitHub</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={reactjs} alt="Java" width="100" height="100" />
                                <figcaption>React JS</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="item-skill-container">
                                <img src={hibernate} alt="Java" width="100" height="100" />
                                <figcaption>Hibernate</figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;