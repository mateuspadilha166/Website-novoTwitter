import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './app.css'; 

// Importe as imagens
import lullychan from './lully.jpg';
import settsunai from './lully2.jpg';
import iam_the_speak from './lully3.jpg';

const amigos = [
    { id: 1, name: "lullychan", images: [lullychan, settsunai, iam_the_speak] }, 
    { id: 2, name: "settsunai", images: [settsunai, iam_the_speak, lullychan] }, 
    { id: 3, name: "iam_the_speak", images: [iam_the_speak, lullychan, settsunai] }, 
];

function Perfil1() {
    const navigate = useNavigate();
    const { id } = useParams();
    const amigo = amigos.find(friend => friend.id === parseInt(id));

    const handleVoltar = () => {
        navigate(-1);
    };

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
            <button onClick={handleVoltar}>Voltar</button>
        </div>
    );
}

export default Perfil1;
