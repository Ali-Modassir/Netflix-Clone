import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflix);
      // console.log(request);
      let arrlength = request.data.results.length;
      setMovie(request.data.results[Math.floor(Math.random() * arrlength - 1)]);
      // console.log(movie);
      return request;
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios.get(requests.fetchNetflix).then((response) => {
  //     let data = response.data.results;
  //     let length = data.length;
  //     console.log(data[Math.random() * 10]);
  //     console.log(length);
  //     console.log(data[Math.random() * length - 1]);
  //     setMovie(data[Math.random() * length - 1]);
  //   });
  // }, []);

  //   let title = 0;

  //   if (movie.title) {
  //     title = movie.title;
  //   } else if (movie.name) {
  //     title = movie.name;
  //   } else {
  //     title = movie.original_name;
  //   }
  console.log(movie);
  let mainLink = "https://image.tmdb.org/t/p/original";

  function truncate(str, n) {
    let des = str.length > n ? str.substr(0, n - 1) + "...." : str;
    return des;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: `cover`,
        backgroundImage: `url(${mainLink}${movie.backdrop_path})`,
        backgroundPosition: `center center`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title ? movie.title : movie.original_name || movie.name}
        </h1>
        <div className="banner_buttons">
          <button class="banner_button">Play</button>
          <button class="banner_button">My List</button>
        </div>
        <h1 className="banner_discription">
          {truncate(
            movie.overview !== undefined ? movie.overview : "hello",
            150
          )}
        </h1>
        <div className="banner-fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
