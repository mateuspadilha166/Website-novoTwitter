import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import lullychan from './lullychan.jpg';
import settsunai from './Mídia.jpg';
import iam_the_speak from './speak.jpg';

function Header() {
    const navigate = useNavigate();

    const friends = [
        { id: 1, name: "lullychan", img: lullychan },
        { id: 2, name: "settsunai", img: settsunai },
        { id: 3, name: "iam_the_speak", img: iam_the_speak },
    ];
    const handlePerfil = (friendName) => {
        navigate(`/perfil/${friendName}`);
    };


    const handlePostar = () => {
        navigate("/Postar");
    };

    return (
        <div className="header-container">
            <div className="stories-bar">
                {friends.map(friend => (
                    <div key={friend.id} className="story" onClick={() => handlePerfil(friend.name)}>
                        <img className="story-image" src={friend.img} alt={friend.name} />
                        <span className="story-name">{friend.name}</span>
                    </div>
                ))}

            </div>
            <button className="post-button" onClick={handlePostar}>Postar</button>
        </div>
    );
}

export default Header;
