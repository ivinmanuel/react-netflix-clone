import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/Constants.js';
import YouTube from 'react-youtube';



function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    // Fetch movie video and update the active row and URL in the parent
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        // Inform the parent component which row is active and the video to play
        props.handleActiveRow(props.rowId, response.data.results[0]);
      }
    });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj) =>
            <img
              key={obj.id}
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallposter' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="rowpost pics"
            />
          )
        }
      </div>

      {props.activeRow === props.rowId && props.urlId && <YouTube opts={opts} videoId={props.urlId.key} />}
    </div>
  );
}

export default RowPost;
