import React from 'react';
import './index.css';
import emailIcon from './img/email.png';
import instagramIcon from './img/instagram.png';
import whatsappIcon from './img/whatsapp.png';
import linkedinIcon from './img/linkedin.png';
import gitIcon from './img/github.png';
import arrowUpIcon from './img/upload.png';

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <footer>
            <div className='container-footer'>
                <button onClick={scrollTop} className='back-to-top-btn'>
                    <img src={arrowUpIcon} alt="Voltar ao topo" />
                </button>

                <div className='message'>
                    <h2>Entre em contato comigo.</h2>
                </div>

                <div className='contact-info'>
                    <a href="mailto:poloniato155@gmail.com">
                        <img src={emailIcon} alt="Email" />
                    </a>
                    <a href="https://www.instagram.com/jpoloniato" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5566996837095" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/joão-victor-poloniato-buss-908177164/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/JoaoVictorPoloniato" target="_blank" rel="noopener noreferrer">
                        <img src={gitIcon} alt="GitHub" />
                    </a>
                </div>

                <div className='copyright'>
                    <p>&copy; {new Date().getFullYear()} João Victor Poloniato Buss. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
