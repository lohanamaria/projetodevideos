import React, { useEffect, useState } from 'react';

const Destaque = () => {
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    const latestFourVideos = storedVideos.slice(-4).reverse();
    setLatestVideos(latestFourVideos);
  }, []);

  return (
    <div className="content destaque">
      <h2>Últimos 4 Vídeos Registrados</h2>
      <div className="video-container">
        {latestVideos.length > 0 ? (
          latestVideos.map((video, index) => (
            <div key={index} className="video">
              <h3>{video.nome}</h3>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
                title={video.nome}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p>Nenhum vídeo registrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Destaque;
