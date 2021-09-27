import { FiLink } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaGraduationCap, FaUniversity, FaRegClock } from 'react-icons/fa';


import './styles.css';

const Studies = () => {
    return (
        <section id="studies" className="page space-top">
            <div className="page-container">
                <h1 className="title-page">Estudos</h1>
                <div className="course-item">
                    <div className="informations">
                        <div>
                            <FaGraduationCap />
                            <h3>BACHARELADO EM SISTEMAS DE INFORMAÇÃO</h3>
                        </div>
                        <div>
                            <FaUniversity />
                            <h4>Institudo Federal Goiano - Campus Ceres</h4>
                        </div>
                        <div>
                            <FaRegClock />
                            <p>3600 hrs</p>
                        </div>
                        <p>Em andamento</p>
                    </div>
                    <div className="coursers-icons-container">
                        <a href="#" >
                            <AiOutlineInfoCircle />
                        </a>
                        <a href="https://ifgoiano.edu.br/" target="_blank"  >
                            <FiLink />
                        </a>
                    </div>
                </div>


                <div className="course-item">
                    <div className="informations">
                        <div>
                            <FaGraduationCap />
                            <h3>INTRODUÇÃO AO GIT E AO GITHUB</h3>
                        </div>
                        <div>
                            <FaUniversity />
                            <h4>DIGITAL INNOVATION ONE</h4>
                        </div>
                        <div>
                            <FaRegClock />
                            <p>5 hrs</p>
                        </div>
                        <p>Concluído</p>
                    </div>
                    <div className="coursers-icons-container">
                        <a href="#" >
                            <AiOutlineInfoCircle />
                        </a>
                        <a href="https://digitalinnovation.one/" target="_blank"  >
                            <FiLink />
                        </a>
                    </div>
                </div>

                <div className="course-item">
                    <div className="informations">
                        <div>
                            <FaGraduationCap />
                            <h3>BACHARELADO EM SISTEMAS DE INFORMAÇÃO</h3>
                        </div>
                        <div>
                            <FaUniversity />
                            <h4>Institudo Federal Goiano - Campus Ceres</h4>
                        </div>
                        <div>
                            <FaRegClock />
                            <p>3600 hrs</p>
                        </div>
                        <p>Em andamento</p>
                    </div>
                    <div className="coursers-icons-container">
                        <a href="#" >
                            <AiOutlineInfoCircle />
                        </a>
                        <a href="https://ifgoiano.edu.br/" target="_blank"  >
                            <FiLink />
                        </a>
                    </div>
                </div>

                <div className="course-item">
                    <div className="informations">
                        <div>
                            <FaGraduationCap />
                            <h3>BACHARELADO EM SISTEMAS DE INFORMAÇÃO</h3>
                        </div>
                        <div>
                            <FaUniversity />
                            <h4>Institudo Federal Goiano - Campus Ceres</h4>
                        </div>
                        <div>
                            <FaRegClock />
                            <p>3600 hrs</p>
                        </div>
                        <p>Em andamento</p>
                    </div>
                    <div className="coursers-icons-container">
                        <a href="#"  >
                            <AiOutlineInfoCircle className="icon-info" />
                        </a>
                        <a href="https://ifgoiano.edu.br/" target="_blank"  >
                            <FiLink />
                        </a>
                    </div>
                </div>





            </div>
        </section>
    );
}

export default Studies;