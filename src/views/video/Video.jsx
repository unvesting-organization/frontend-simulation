import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

const Video = ({ momento }) => {
  const [urlVideo, setUrlVideo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrlVideo = async () => {
      try {
        const response = await axios.get(
          `https://api-workshop-silumation.vercel.app/video?time=${momento + 1}`
        );
        setLoading(false);
        setUrlVideo(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchUrlVideo();
  }, [momento]);

  if (loading) {
    return <h1 className="text-white text-center">Cargando el vídeo...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-white text-center text-4xl">Vídeo</h2>
      <div
        className="w-full flex justify-center"
        dangerouslySetInnerHTML={{ __html: urlVideo }}
      >
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pzRxqx6uXks"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

Video.propTypes = {
  momento: PropTypes.number.isRequired,
};

export default Video;
