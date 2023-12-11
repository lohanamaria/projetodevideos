import React, { useEffect, useState } from "react";

const VideoDetail = ({ match }) => {
  const videoId = match.params.id;
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("videos")) || [];
    const selectedVideo = localStorageData.find(
      (video) => video.id === videoId,
    );

    setVideoData(selectedVideo);
  }, [videoId]);

  if (!videoData) {
    return <div>=...</div>;
  }

  return (
    <div>
      <h2>{videoData.title}</h2>
      <p>{videoData.description}</p>
      {}
      <iframe
        title={videoData.title}
        width="560"
        height="315"
        src={videoData.url}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );

};
export default VideoDetail;
