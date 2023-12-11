import React, { useState, useEffect } from 'react';

const ListaVideos = () => {
  const 
    [videos, setVideos] = useState([]);

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
          </div>
        );
      })}
    </div>

  );
};

export default ListaVideos;

const VideosRegistrados = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(storedViimport React, { useState, useEffect } from 'react';
    import { Link } from "react-router-dom";

    const VideosRegistrados = () => {
      const [videos, setVideos] = useState([]);

      useEffect(() => {
        const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
        setVideos(storedVideos);
      }, []);