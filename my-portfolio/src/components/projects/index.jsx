import React, { useState } from "react";
import './index.css';
import githubIcon from './img/github.png';
import webIcon from './img/website.png';
import projeto1 from './img/projeto1.png';
import projeto2 from './img/projeto2.png';
import projeto3 from './img/projeto3.png';
import projeto4 from './img/projeto4.png';

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const projects = [
        { 
            name: "Site de apresentação empresa", 
            description: "Site feito para a empresa Portotech Sistemas de suas aplicações", 
            image: projeto1,
            githubLink: "https://github.com/JoaoVictorPoloniato/sitedevendas",
            siteLink: "https://teste.portotechsistemas.com.br"
        },
        { 
            name: "Vendas", 
            description: "Projeto de vendas feito em python", 
            image: projeto2,
            githubLink: "https://github.com/JoaoVictorPoloniato/VENDASEXE",
        },
        { 
            name: "Curso react e next.js", 
            description: "Como foi meu curso de react e next", 
            image: projeto3,
            githubLink: "https://github.com/JoaoVictorPoloniato/CURSO-REACT",
        },
        { 
            name: "Cardápio Online", 
            description: "Cardápio online, feito com tailwindcss, HTML e JS, feito com integrações para clientes, para atender a restaurantes e food-trucks pequenos.", 
            image: projeto4,
            githubLink: "https://github.com/JoaoVictorPoloniato/CARDAPIO-ONLINE",
        }
    ];

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <section className="projects-section">
            <button onClick={previousProject}>Anterior</button>
            <div className="project-container">
                <div className="project">
                    <div className="project-content">
                        <div className="project-info">
                            <h3>{projects[currentProject].name}</h3>
                            <p>{projects[currentProject].description}</p>
                            <div className="project-links">
                                <a href={projects[currentProject].githubLink} target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                                {projects[currentProject].siteLink && (
                                    <a href={projects[currentProject].siteLink} target="_blank" rel="noopener noreferrer">
                                        <img src={webIcon} alt="Website" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={nextProject} className="btn-go">Próximo</button>
        </section>
    );
};

export default ProjectsSection;
