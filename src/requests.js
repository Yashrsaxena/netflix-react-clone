const APIKEY = "b86bea7ba5620ecc68565b7f2dede841";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;