import React, { Component } from "react";
import "./App.css";
import Row from "./Row.js";
import request from "./request.js";
import Banner from "./Banner.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflix}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={request.fetchRomanticMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
      </div>
    );
  }
}

export default App;
