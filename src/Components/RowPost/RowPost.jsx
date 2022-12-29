import axios from "axios";
import youtube from "react-youtube";
import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constans/constans";
import "./RowPost.css";
import YouTube from "react-youtube";
function RowPost(props) {
  const [moveis, setmoveis] = useState([]);
  const [urlId, seturlId] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setmoveis(response.data.results);
      })
      .catch((err) => {
        console.log(err);
        alert("Network Error");
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovei = (id) => {
     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){

         seturlId(response.data.results[0])
     }   else{
        console.log('Array is empty');
     }


     })
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {moveis.map((obj) => (
          <img
            onClick={() => handleMovei(obj.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>
     { urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
