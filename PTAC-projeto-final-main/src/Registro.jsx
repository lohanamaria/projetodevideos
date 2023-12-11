import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [video, setVideo] = useState({
    nome: '',
    url: '',
    artista: '',
    letras: '',
  });

  const [registroSucesso, setRegistroSucesso] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    storedVideos.push(video);
    localStorage.setItem('videos', JSON.stringify(storedVideos));
    setRegistroSucesso(true);
    navigate('/');
  };

  return (
    <div className="content registro">
      <h1>Registrar Novo Vídeo</h1>
      <div className="form">
        {registroSucesso ? (
          <>
            <p>Vídeo registrado com sucesso!</p>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Vídeo:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={video.nome}
                onChange={(e) => setVideo({ ...video, nome: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">URL do Vídeo:</label>
              <input
                type="url"
                id="url"
                name="url"
                value={video.url}
                onChange={(e) => setVideo({ ...video, url: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="artista">Artista:</label>
              <input
                type="text"
                id="artista"
                name="artista"
                value={video.artista}
                onChange={(e) => setVideo({ ...video, artista: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="letras">Letras:</label>
              <textarea
                id="letras"
                name="letras"
                value={video.letras}
                onChange={(e) => setVideo({ ...video, letras: e.target.value })}
              />
            </div>

            <button type="submit">Registrar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registro;
