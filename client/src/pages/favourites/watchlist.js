import "./style.css"
import {Navbar} from "../../components/Navbar"
import { useEffect,useState,useContext } from "react"
import {AuthContext} from "../../context/Authcontext"
import {useHistory} from "react-router-dom"
import { Tiles } from "../../components/tiles"
export const Watchlist = () => {
    const [movie,setMovie] = useState([])
    const [islogged,setislogged] = useContext(AuthContext)
    const history = useHistory()
   
    useEffect(() => {
        fetch("/user/watch",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser")}})
    }).then((res) => {return res.json()})
    .then((res) => {
        res.watchlist.forEach((found,index) => {
            fetch(
                `https://api.themoviedb.org/3/movie/${found}?api_key=e93c9fd6b6add9a5402788dd99c744a3`
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => setMovie(currentarray => [...currentarray,data]));
        })
       
     
        })
    .catch(error => console.error(error))
   
    },[])
    
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    
     const watchlist = getUniqueListBy(movie,"original_title").sort().map((movies,index) =>{
            return <Tiles key={index} actionmovie={movies}></Tiles>
       })
       
    return <>
   {islogged.status === true || sessionStorage.getItem("status") === "true" ?(<>
    <Navbar></Navbar>
        <div className="container-body">
            <div className="fav-flex">
                {movie.length !== 0 ? (<div className="flex-wrapper">
                    
                    {watchlist}
                </div>):(<div className="flex-cntr">
                    <h1>Your watchlist is Empty</h1>
                </div>)}
                
            </div>
        </div>
   </>):(history.push("/"))}
    
    </>
}