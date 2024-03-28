import React from 'react';
import './index.css';

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <footer>
            <div className='container-footer'>
                <div className='sobre-mim'>
                    <h2>Esse foi alguns dos meus trabalhos e projetos.</h2>
                    <h3>Espero que tenha gostado.</h3>
                    <p>Trabalho na área como desenvolvedor full stack, aqui compartilhei alguns de meus projetos.</p>
                    <p>Caso queira entrar em contato comigo para conversar sobre algo estou dispobilizando meus contatos.</p>
                    <p>Pode tambem me chamar caso queira uma conversa como bons amigos. Estou sempre a disposição para aprender e a ensinar tambem.😉</p>
                </div>
                <button onClick={scrollTop} className='back-to-top-btn'>
                    <i className='fa fa-arrow-up'></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;