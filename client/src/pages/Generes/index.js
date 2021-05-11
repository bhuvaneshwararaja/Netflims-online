import { Navbar } from "../../components/Navbar"
import "./style.css"
import request from "../../request";
import {Tiles} from "../../components/tiles"
import {useHistory} from "react-router-dom"
import {useEffect, useState,useContext} from "react"
import {AuthContext} from "../../context/Authcontext"

export const Generes = () => {
    const [movies,setmovies] = useState([])
    const [moviegen,setmoviegen] = useState("All")
    const [islogged,setislogged] = useContext(AuthContext)
    const history = useHistory()
    useEffect(() => {
        for(var i = 1; i <= 10; i++){
            fetch(request.fetchAll+`&page=${i}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setmovies(currentarr => [...currentarr,data.results.reverse()]);
       
        });
        }
    },[])
    var movie;
    if(movies){
       var merged = [].concat.apply([], movies)
       movie = merged.map((movies,index) => {return <Tiles key={index} actionmovie={movies}></Tiles>})
    }
   
    return <>
    {islogged.status === true || sessionStorage.getItem("status") === "true" ? (<>
        <Navbar></Navbar>
        <div className="container-body">
            <div className="fav-flex">
            <select className="select-gen" onChange={(e) => {
                if(e.target.value === "Action"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchActionMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Romance"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchRomanceMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Mystery"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchMysteryMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Adventure"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchAdventureMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Comedy"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchComedyMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Sci-fi"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchScifiMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Documentory"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchDocumentriesMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
                else if(e.target.value === "Horror"){
                    setmovies([])
                    setmoviegen(e.target.value)
                    for(var i = 1; i <= 10; i++){
                        fetch(request.fetchHorrorMovies+`&page=${i}`)
                    .then((res) => {
                      return res.json();
                    })
                    .then((data) => {
                      setmovies(currentarr => [...currentarr,data.results]);
                   
                    });
                    }
                }
            }}>
                 <option value="">Select Generes</option>
                <option value="Action">Action</option>
                <option value="Romance">Romance</option>
                <option value="Mystery">Mystery</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Documentory">Documentory</option>
                <option value="Horror">Horror</option>
            </select>
            <h1 className="pdlm0-1 heading" style={{"marginTop":"3rem"}}>{moviegen+" Movies"}</h1>
            <div className="flex-wrapper">{movie}</div>
            </div>
        </div>
    </>):(history.push("/"))}
       
    </>
}