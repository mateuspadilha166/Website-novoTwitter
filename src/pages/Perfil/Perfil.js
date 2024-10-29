import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import lullychan from '../../componente/Header/lullychan.jpg';
import lullychan2 from '../Perfil1/lully.jpg';
import lullychan3 from '../Perfil1/lully2.jpg';
import lullychan4 from '../Perfil1/lully3.jpg';
import lullychan5 from '../Perfil1/lully4.jpg';
import lullychan6 from '../Perfil1/lully5.jpg';
import settsunai from '../../componente/Header/Mídia.jpg';
import speak from '../Perfil2/speak.jpg';
import speak2 from '../Perfil2/speak2.jpg';
import speak3 from '../Perfil2/speak3.jpg';
import iam_the_speak from '../../componente/Header/speak.jpg';
import './app.css';

const Perfil = () => {
    const { name } = useParams();

    const profileImages = {
        lullychan: [lullychan, lullychan2, lullychan3, lullychan4, lullychan5, lullychan6],
        settsunai: [settsunai],
        iam_the_speak: [speak, speak2, speak3, iam_the_speak]
    };

    const initialLikes = profileImages[name]?.map(() => 0) || [];
    const [likes, setLikes] = useState(initialLikes);

    const handleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    return (
        <div className="perfil-container">
            <h1 className="perfil-title">Perfil de {name}</h1>
            <div className="perfil-images">
                {profileImages[name] ? (
                    profileImages[name].map((image, index) => (
                        <div key={index} className="image-container">
                            <img className="perfil-image" src={image} alt={`${name} ${index + 1}`} />
                            <div className="likes">
                                <button className="like-button" onClick={() => handleLike(index)}>❤️ Like</button>
                                <span>{likes[index]} likes</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Imagens não encontradas para este perfil.</p>
                )}
            </div>
        </div>
    );
};

export default Perfil;
