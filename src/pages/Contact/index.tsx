import { SiInstagram, SiGmail, SiWhatsapp, SiGithub, SiLinkedin } from 'react-icons/si';

import './styles.css';

const Contact = () => {
    return (
        <section id="contact" className="page space-top">
            <div className="page-container">
                <h1 className="title-page">Contatos</h1>

                <ul>
                    <li className="contact">
                        <a href="https://linkedin.com/in/marcoswp">
                            <SiLinkedin className="icon-contact" color="#0A66C2" />
                            <p>linkedin.com/in/marcoswp</p>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://github.com/marcoswinicios">
                            <SiGithub className="icon-contact" color="#181717" />
                            <p>github.com/marcoswinicios</p>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="mailto:pmarcoswinicios@gmail.com">
                            <SiGmail className="icon-contact gmail" color="#EA4335" />
                            <p>pmarcoswinicios@gmail.com</p>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://whats.link/marcoswinicios">
                            <SiWhatsapp className="icon-contact " color="#25D366" />
                            <p>62 9 9621-2064</p>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://instagram.com/marcoss.mw">
                            <SiInstagram className="icon-contact" color="#E4405F" />
                            <p>@marcoss.mw</p>
                        </a>
                    </li>
                    <li className="contact">
                        <a href="https://instagram.com/devnicebr">
                            <SiInstagram className="icon-contact" color="#E4405F" />
                            <p>@devnicebr</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;