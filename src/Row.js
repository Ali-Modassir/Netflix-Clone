import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  let fetchUrl = props.fetchUrl;
  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await axios.get(fetchUrl);
  //       setMovies(request.data.results);
  //       return request;
  //     }
  //     fetchData();
  //   }, [fetchUrl]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.table(movies);
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
