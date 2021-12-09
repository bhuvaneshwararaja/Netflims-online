/* eslint-disable jsx-a11y/iframe-has-title */
import "./style.css";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { Rowcard } from "../../components/Rowcard";
import { ScrollRight, ScrollLeft } from "../../slider";
import {AuthContext} from "../../context/Authcontext"

export const Movie = () => {
  const [movie, setMovies] = useState();
  const [video, setVideo] = useState();
  const [recommended, setRecom] = useState();
  const [islogged,setislogged] = useContext(AuthContext)
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e93c9fd6b6add9a5402788dd99c744a3`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setMovies(data));
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e93c9fd6b6add9a5402788dd99c744a3`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setVideo(data));
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=e93c9fd6b6add9a5402788dd99c744a3&language=en-US&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setRecom(data.results));
  }, [id]);
if(movie !== undefined){
  console.log(movie);
}

  return (
    <>
    {islogged.status === true || sessionStorage.getItem("status") === "true" ?(<>
      {movie ? (
        <div className="container">
          <img
            className="container-img"
            src={
              movie.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            }
            alt=""
          ></img>
          <div className="movie-append">
            <div className="close-btn">
              <button
                onClick={() => {
                  history.push("/home");
                }}
              >
                <i
                  class="las la-times"
                  onClick={() => {
                    history.push("/home");
                  }}
                ></i>
              </button>
            </div>
            <div className="movie-det">
              <div className="complete-det">
                <h1 style={{ margin: 0, fontSize: "3rem" }}>
                  {movie.original_title}
                </h1>
                <p style={{ lineHeight: "2.5rem" }}>{movie.overview}</p>
                <h3>Generes</h3>
                <ul>
                  {movie.genres.map((result, index) => {
                    return <li style={{ listStyle: "none" }}>{result.name}</li>;
                  })}
                </ul>
                <h3>Language</h3>
                <ul>
                  {movie.spoken_languages.map((result, index) => {
                    return (
                      <li style={{ listStyle: "none" }}>
                        {result.english_name}
                      </li>
                    );
                  })}
                </ul>
                <div className="movie-btns">
                  <button>Play</button>
                  <button>WatchList</button>
                  <button>Favorite</button>
                </div>
              </div>
              <div className="video-container">
                <iframe
                  src={
                    video
                      ? `https://www.youtube.com/embed/${video.results[0].key}?controls=0&autoplay=1&rel=0`
                      : ""
                  }
                  allow='autoplay'
                ></iframe>
              </div>
            </div>
            <div className="recommended">
              <div className="movie-sec">
                <div className="flex-cln">
                  <div className="head-sec">
                    <h1 className="pdlm0-1 heading">Next to Watch </h1>
                    <div
                      className="slide-btns"
                      style={{ paddingRight: ".5rem" }}
                    >
                      <button className="" id="0" onClick={ScrollRight}>
                        <i
                          class="las la-angle-left"
                          id="0"
                          onClick={ScrollRight}
                        ></i>
                      </button>
                      <button className="" id="0" onClick={ScrollLeft}>
                        <i
                          class="las la-angle-right"
                          id="0"
                          onClick={ScrollLeft}
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex-row">
                    {recommended
                      ? recommended.map((action, index) => {
                          return (
                            <Rowcard key={index} actionmovie={action}></Rowcard>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>):(history.push("/"))}
     
    </>
  );
};
