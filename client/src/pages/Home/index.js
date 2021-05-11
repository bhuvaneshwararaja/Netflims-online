import "./style.css";
import { useEffect, useState, useContext } from "react";
import { Rowcard } from "../../components/Rowcard";
import request from "../../request";
import { Navbar } from "../../components/Navbar";
import { ScrollRight, ScrollLeft } from "../../slider";
import {AuthContext} from "../../context/Authcontext"
import {Link, useHistory} from "react-router-dom" 
export const Home = () => {
  
  const history = useHistory()
  const [actionmov, setActionmov] = useState();
  const [horrormov, setHorrormov] = useState();
  const [romancemov, setRomancemov] = useState();
  const [documentmov, setDocmov] = useState();
  const [scifimov, setScifimov] = useState();
  const [adventuremov, setAdvmov] = useState();
  const [trendmov, setTrendmov] = useState();
  const [mystmov,SetMystmov] = useState();
  const [islogged,setislogged] = useContext(AuthContext)

  useEffect(() => {
    fetch(request.fetchActionMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setActionmov(data.results);
      });
    fetch(request.fetchHorrorMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHorrormov(data.results);
      });
    fetch(request.fetchRomanceMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRomancemov(data.results);
      });
    fetch(request.fetchDocumentriesMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDocmov(data.results);
      });
    fetch(request.fetchAdventureMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvmov(data.results);
      });
    fetch(request.fetchScifiMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setScifimov(data.results);
      });
    fetch(request.fetchTrending)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrendmov(data.results);
      });
      fetch(request.fetchMysteryMovies)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetMystmov(data.results);
      });

  }, []);
  
  var actionmovies,
    horrormovies,
    romancemovies,
    documentmovies,
    adventuremovies,
    scifimovies,
    mysterymovies,
    trending;

  if (
    actionmov &&
    horrormov &&
    romancemov &&
    documentmov &&
    adventuremov &&
    scifimov &&
    mystmov&&
    trendmov
  ) {
    actionmovies = actionmov.map((action, index) => {
      return <Rowcard key={index} actionmovie={action} ></Rowcard>;
    });
    horrormovies = horrormov.map((action, index) => {
      return <Rowcard key={index} actionmovie={action}></Rowcard>;
    });
    romancemovies = romancemov.map((action, index) => {
      return <Rowcard key={index} actionmovie={action}></Rowcard>;
    });
    documentmovies = documentmov.map((action, index) => {
      return <Rowcard key={index} actionmovie={action}></Rowcard>;
    });
    adventuremovies = adventuremov.reverse().map((action, index) => {
      return <Rowcard key={index} actionmovie={action}></Rowcard>;
    });
    scifimovies = scifimov.reverse().map((action, index) => {
      return <Rowcard key={index} actionmovie={action}></Rowcard>;
    });
    trending = trendmov.slice(0, 10).map((action, index) => {
      return (
        <Rowcard key={index} actionmovie={action} trending={true}></Rowcard>
      );
    });
    mysterymovies = mystmov.map((action, index) => {
      return <Rowcard key={index} actionmovie={action} ></Rowcard>;
    });
  }
  var random = Math.floor(Math.random() * 10 + 1);
  const moviearr = [
    actionmovies,
    horrormovies,
    trending,
    romancemovies,
    documentmovies,
    adventuremovies,
    scifimovies,
    mysterymovies
  ];
  const titlearr = [
    "Action Movies",
    "Horror Movies",
    "Trending Now >",
    "Romance Movies",
    "Documentory Movies",
    "Adventure Movies",
    "Sci-Fi Movies",
    "Mystery Movies"
  ];
  return (
    <>
  {islogged.status === true || sessionStorage.getItem("status") === "true" ?(<>
    <Navbar></Navbar>
    <div className="banner">
      <div className="top">
        {trendmov ? (
          <img
            className="banner-img"
            src={`https://image.tmdb.org/t/p/original/${trendmov[random].backdrop_path}`}
            alt=""
          ></img>
        ) : (
          ""
        )}
        <div className="append-banner">
          {trendmov ? (
            <div className="det">
              <h1 className="banner-head">{trendmov[random].original_title}</h1>
              <p className="banner-para">
                {trendmov[random].overview.slice(0, 120) + ". . ."}
              </p>
              <div className="banner-btns">
                <button value={trendmov[random].id} onClick={(e) => {
                  history.push(`/movies/${e.target.value}`)
                  window.location.reload();
              }}>Play</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="movie-sec">
        <div className="flex-cln">
          {moviearr.map((movie, index) => {
            return (
              <>
                <div className="head-sec" key={index}>
                  <h1 className="pdlm0-1 heading">{titlearr[index]}</h1>
                  <div
                    className="slide-btns"
                    style={{ paddingRight: ".5rem" }}
                  >
                    <button
                      className=""
                      id={index.toString()}
                      onClick={ScrollRight}
                    >
                      <i
                        className="las la-angle-left"
                        id={index.toString()}
                        onClick={ScrollRight}
                      ></i>
                    </button>
                    <button
                      className=""
                      id={index.toString()}
                      onClick={ScrollLeft}
                    >
                      <i
                        className="las la-angle-right"
                        id={index.toString()}
                        onClick={ScrollLeft}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="flex-row">{movie}</div>
              </>
            );
          })}
        </div>
      </div>
      <div style={{"textAlign": "center"}}>
      <Link to="/generes" style={{"fontSize":"1.2rem","color":"#fff"}}>View More</Link>
      </div>
      
    </div>
  </>):(history.push("/"))}
   
  </>
);
   
};
