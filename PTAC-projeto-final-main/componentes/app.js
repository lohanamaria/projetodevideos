// Componente para listar os vídeos
import React, { useState, useEffect } from 'react';

const ListaVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = localStorage.getItem('videos');
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  return (
    <div>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            <h3>{video.titulo}</h3>
            <p>{video.descricao}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListaVideos;