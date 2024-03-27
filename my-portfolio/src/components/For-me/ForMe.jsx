import React, { useState, useEffect } from 'react';
import './index.css';
import { useInView } from 'react-intersection-observer';

function ForMe() {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <div ref={ref} className={`form-container ${visible ? 'visible' : ''}`}>
            <p>É um prazer apresentar meu portfólio como desenvolvedor front-End com conhecimento em HTML, CSS, JavaScript, React.js, Node.js, TypeScript, PHP, Tailwind CSS, Next.js, Bootstrap, Python e C# .NET.</p>
            <p>Sou um apaixonado por tecnologia e design de interfaces. Desde o início da minha transição de carreira, tenho me dedicado a aprimorar minhas habilidades como desenvolvedor front-end e criar experiências web memoráveis.</p>
            <p>Nesta minha apresentação, vou compartilhar alguns projetos e mostrar minhas habilidades. E deixar meus contatos, para caso queiram conversar comigo, e compartilhar algo, ou pedir algo. 😁😉 </p>
        </div>
    );
}

export default ForMe;
