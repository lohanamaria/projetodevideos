import React, { useState } from 'react';

const Registro = () => {
  const [video, setVideo] = useState({
    nome: '',
    url: '',
    artista: '',
    letras: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    storedVideos.push(video);
    localStorage.setItem('videos', JSON.stringify(storedVideos));
  };

  return (
    <div className="registro">
      <h1>Registrar novo vídeo</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome do vídeo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={video.nome}
            onChange={(e) => setVideo({ ...video, nome: e.target.value })}
          />
          <label htmlFor="url">URL do vídeo:</label>
          <input
            type="url"
            id="url"
            name="url"
            value={video.url}
            onChange={(e) => setVideo({ ...video, url: e.target.value })}
          />
          <label htmlFor="artista">Artista:</label>
          <input
            type="text"
            id="artista"
            name="artista"
            value={video.artista}
            onChange={(e) => setVideo({ ...video, artista: e.target.value })}
          />
          <label htmlFor="letras">Letras:</label>
          <input
            type="text"
            id="letras"
            name="letras"
            value={video.letras}
            onChange={(e) => setVideo({ ...video, letras: e.target.value })}
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;