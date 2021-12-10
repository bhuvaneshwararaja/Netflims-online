import "./style.css"
import {Navbar} from "../../components/Navbar"
import { useEffect,useState,useContext } from "react"
import { Tiles } from "../../components/tiles"
import {AuthContext} from "../../context/Authcontext"
import {useHistory} from "react-router-dom"
export const Favourites = () => {
    const [movie,setMovie] = useState([])
    const [islogged,setislogged] = useContext(AuthContext)
    const history = useHistory()
    
    useEffect(() => {
        fetch("/user/favlist",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser")}})
    }).then((res) => {return res.json()})
    .then((res) => {
        res.fav.forEach((found,index) => {
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
    
     const favlist = getUniqueListBy(movie,"original_title").sort().map((movies,index) =>{
            return <Tiles key={index} actionmovie={movies} remove={true} type={"favourite"}></Tiles>
       })
       
    return <>
    {islogged.status === true || sessionStorage.getItem("status") === "true" ?(<>
        <Navbar></Navbar>
        <div className="container-body">
            <div className="fav-flex">
                
            {movie.length !== 0 ? (<div className="flex-wrapper">
                    
                    {favlist}
                </div>):(<div className="flex-cntr">
                    <h1>Your Favouritelist is Empty</h1>
                </div>)}
            </div>
        </div>
    </>):(history.push("/"))}
    
    </>
}
