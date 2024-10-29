// Exemplo para Perfil1.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './app.css';
import speak from './speak.jpg';
import speak2 from './speak2.jpg';
import speak3 from './speak3.jpg';

const amigos = [
    { id: 1, name: "Speak_inglish?", images: [speak, speak2, speak3] },
    
];

function Perfil2() {
    const { id } = useParams();
    const amigo = amigos.find(friend => friend.id === parseInt(id));

    if (!amigo) {
        return <p>Amigo não encontrado!</p>;
    }

    return (
        <div className="perfil-container">
            <h1>{amigo.name}</h1>
            <div className="post-list">
                {amigo.images.map((img, index) => (
                    <div key={index} className="post-item">
                        <img src={img} alt={`${amigo.name} - Postagem ${index + 1}`} className="post-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Perfil2;
