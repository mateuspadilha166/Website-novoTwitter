import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import { redesocial, storage } from "../../firebaseConexao"; 
import { addDoc, collection, getDocs, updateDoc, doc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import './app.css';

function Postar() {
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]); 
    const [image, setImage] = useState(null);

    useEffect(() => {
        buscar(); // Chama a função buscar assim que o componente é montado
    }, []);

    async function adicionar() {
        let imageUrl = '';
        
        if (image) {
            const imageRef = ref(storage, `posts/${image.name}`);
            await uploadBytes(imageRef, image)
                .then(async (snapshot) => {
                    imageUrl = await getDownloadURL(snapshot.ref);
                })
                .catch((error) => console.log("Erro ao fazer upload da imagem:", error));
        }

        await addDoc(collection(redesocial, "posts"), { post, like: 0, imageUrl })
            .then(() => {
                console.log("Postado");
                setPost(''); 
                setImage(null);
                buscar(); // Atualiza os posts após adicionar um novo
            })
            .catch((error) => {
                console.log("Erro ao postar", error);
            });
    }

    async function buscar() {
        const postRef = collection(redesocial, "posts");
        const snapshot = await getDocs(postRef); 
        const listas = snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data().post,
            like: doc.data().like,
            imageUrl: doc.data().imageUrl || ''
        }));
        setPosts(listas); 
    }

    async function curtir(id, currentLikes) {
        const postRef = doc(redesocial, "posts", id);
        await updateDoc(postRef, { like: currentLikes + 1 })
            .then(() => {
                console.log("Post curtido");
                buscar(); 
            })
            .catch((error) => {
                console.log("Erro ao curtir", error);
            });
    }

    return (
        <div className="postar-container">
            <h2>Criar Postagem</h2>
            <textarea
                placeholder="O que está acontecendo?"
                value={post}
                onChange={(e) => setPost(e.target.value)} 
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])} 
            />
            <button onClick={adicionar}>Postar</button> 

            <h3>Postagens</h3>
            <button onClick={buscar}>Atualizar</button> 
            <ul className="post-list">
                {posts.map((p) => ( 
                    <li key={p.id} className="post-item">
                        <div className="post-content">
                            <p>{p.post}</p>
                            {p.imageUrl && <img src={p.imageUrl} alt="Post" className="post-image" />}
                            <div className="likes">
                                <button onClick={() => curtir(p.id, p.like)}>Curtir</button>
                                <span>Likes: {p.like}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Postar;
