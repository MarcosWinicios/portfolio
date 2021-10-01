import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import './styles.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="page space-top">
            <div className="page-container">
                <h1 className="title-page">Portólio</h1>

                <div className="projects-container">
                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>

                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>

                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>

                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>

                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>

                    <figure className="item-project panel">
                        <img src="#" alt="project" />
                        <figcaption>Name project</figcaption>
                    </figure>
                </div>
                <div className="pagination-container">
                    <div className="pagination">
                        <MdNavigateBefore />
                        <span>1</span>
                        <MdNavigateNext />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;