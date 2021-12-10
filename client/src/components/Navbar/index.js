import "./style.css"
import {Link,useLocation,useHistory} from "react-router-dom"
export const Navbar = () => {
    const location = useLocation()
    const history = useHistory()
   
    return <>
        <nav >
            <div className="img-sec-nav">
                <img src="/netfilms.png" alt="" onClick={() => {history.push("/home")}} style={{"cursor":"pointer"}}></img>
            </div>
            <ul className="nav-sec">
                <li className="nav-link">
                    <Link to="/home" style={location.pathname === "/home" ? ({"color":"crimson"}):({"color":"white"})}>Home</Link>
                </li>
                <li className="nav-link">
                   <Link to="/generes" style={location.pathname === "/generes" ? ({"color":"crimson"}):({"color":"white"})}>Generes</Link>
                </li>
                <li className="nav-link">
                    <Link to="/watchlist" style={location.pathname === "/watchlist" ? ({"color":"crimson"}):({"color":"white"})}>Watchlist</Link>
                </li>
                <li className="nav-link">
                    <Link to="/favourites" style={location.pathname === "/favourites" ? ({"color":"crimson"}):({"color":"white"})}>Favourites</Link>
                </li>
                <li className="nav-link">
                    <Link to="/search" style={location.pathname === "/search" ? ({"color":"crimson"}):({"color":"white"})}>Search</Link>
                </li>
    
            </ul>
           
                <ul className="nav-btns">
                <li className="nav-link">
                    <a href="">Profile</a>
                </li>
                <button className="" onClick={() => { 
                    sessionStorage.clear();
                    history.push("/")
                }}>Logout</button>
                </ul>

            
        </nav>
    </>

}