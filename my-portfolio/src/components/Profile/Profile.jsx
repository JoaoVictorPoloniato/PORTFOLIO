import React, { useState, useEffect } from 'react';
import './index.css';
import { useInView } from 'react-intersection-observer';

function Profile() {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <div className='meu-perfil'>
            <div ref={ref} className={`profile-container ${visible ? 'visible' : ''}`}>
                <div className='myperson'>
                    <h3>Olá, Eu sou</h3>
                    <h1>João Victor Poloniato Buss</h1>
                    <h2>Desenvolvedor Front-End</h2>
                </div>
            </div>
        </div>
    );
}

export default Profile;
