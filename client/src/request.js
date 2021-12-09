const API_KEY= "e93c9fd6b6add9a5402788dd99c744a3"
const request = {
    fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=28",
    fetchMysteryMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=9648",
    fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=35",
    fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=27",
    fetchAdventureMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=12",
    fetchScifiMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=878",
    fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=10749",
    fetchDocumentriesMovies:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=99",
    fetchTrending:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&with_genres=53",
    fetchOrginals:"https://api.themoviedb.org/3/discover/tv?api_key="+API_KEY+"&language=en&with_networks=213",
    fetchAll:"https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en&sort_by=popularity.desc&include_adult=false"
    

}

export default request;
