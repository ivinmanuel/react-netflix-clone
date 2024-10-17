import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import the react-slick carousel
import './Banner.css';
import axios from '../../axios';
import { FaPlay, FaInfoCircle } from 'react-icons/fa'; // Import icons
import { API_KEY, imageUrl } from '../../Constants/Constants.js';

function Banner() {
  const [movies, setMovies] = useState([]); // Changed to an array to hold multiple movies

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovies(response.data.results); // Set movies to the fetched results
      })
      .catch((error) => {
        console.error('Error fetching the movie data', error);
      });
  }, []);

  // Slider settings for the carousel
  const settings = {
    dots: true, // Shows navigation dots at the bottom
    infinite: true, // Infinite scrolling of banners
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of banners shown at once
    slidesToScroll: 1, // Number of banners scrolled at once
    autoplay: true, // Automatically slides through banners
    autoplaySpeed: 3000, // Speed of autoplay in milliseconds
    arrows: false, // Disable the Next button
  };

  return (
    <Slider  {...settings}>
      {movies.map((movie, index) => (
        <div key={index}>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
            }}
          >
            <div className="content">
              <h1 className="title">{movie.title || movie.name || movie.original_title}</h1>
              <h1 className="discription">{movie.overview}</h1>
              <div className="banner_buttons">
                <button className="button">
                  <FaPlay className="icon" /> Play
                </button>
                <button className="button">
                  <FaInfoCircle className="icon" /> Info
                </button>
              </div>
            </div>
            <div className="fade_bottom"></div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
