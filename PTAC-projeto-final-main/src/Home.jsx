import React, { useEffect, useState } from 'react';
import LimparLocalStorage from './LimparLocalStorage.jsx';
import VideoItem from './VideoItem'; 

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedVideos);
  }, []);

  return (
    <div className="content">
      <h2>Vídeos Registrados</h2>
      <div className="video-container">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={index} className="video">
              <h3>{video.nome}</h3>

              <iframe
                width="100%"
                height="200"
                src={"https://www.youtube.com/embed/" + video.url.slice(17)}
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

export default Home;

  
