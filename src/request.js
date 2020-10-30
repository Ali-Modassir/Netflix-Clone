const API_KEY = "6d50e48134ceacb0546803f2f2ad897c" ;

const request = {
   fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
   fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request ; 


