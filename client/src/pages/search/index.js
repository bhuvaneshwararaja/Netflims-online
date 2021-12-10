import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Rowcard } from "../../components/Rowcard"
import { Tiles } from "../../components/tiles"
import "./style.css"
export const SearchPage = () => {
    const [searchResult,setSearchResult] = useState()
    if(searchResult !== undefined) {
        var result = searchResult.map((resultantMovie,index) => {
            return <Tiles key={index} actionmovie={resultantMovie}></Tiles>
        })
    }
return<>
    <Navbar/>
    <div className="search--container">
        <div className="search--inp">
        <input type="text" name="" onChange={(e) => {
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e93c9fd6b6add9a5402788dd99c744a3&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        setSearchResult(res.results)})
                }} placeholder="Type here to search eg: far cry,red notice etc.."></input>
        </div>
        <div className="search--result--container">
                {searchResult === undefined  ? <p>No Result found please Type in search bar or provide a valid text</p> :
                
               <div className="search--flex--wrapper">
                    {result}
                   </div>}
        </div>
    </div>
</>
}

