export default function Destaque (){ 

  const destaque = (props) => {

    const [video, setVideo] = useState({});
    const [letras, setLetras] = useState('');

    useEffect(() => {
      const storedVideos = JSON.parse(localStorage.getItem('videos'));
      const videoId = props.match.params.id;
      const selectedVideo = storedVideos.find((v) => v.id === videoId);
      setVideo(selectedVideo);
      setLetras(selectedVideo.letras);
    }, [props.match.params.id]);
    
  return (
    <div>
      <h2>{video.name}</h2>
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/' + video.url.slice(17)}
        title={video.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>{letras}</div>
    </div>
    };
}};

export default destaque;
