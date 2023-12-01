import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Home(){
return(
<div class="navbar" id="navbar">
  <a href="/home" class="nav-btn" id="nav-btn">Home</a>
  <a href="/destaque" class="nav-btn"> Em destaque</a>
  <a href="/registro" class="nav-btn">Novo vídeo</a>
</div>

const VideosRegistrados = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedVideos);
  }, []);

  return (
    <div>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            <h3>{video.nome}</h3>
            <iframe
              width="560"
              height="315"
              src={'https://www.youtube.com/embed/' + video.url.slice(17)}
              title={video.nome}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

)};