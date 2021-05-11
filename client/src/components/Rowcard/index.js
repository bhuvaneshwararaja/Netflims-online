import "./style.css";
import {useHistory} from "react-router-dom"
import {useState,useEffect} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Rowcard = ({ actionmovie,trending,favlist}) => {
  const history = useHistory()
  return (
    <>
    {trending !== true ? (<div className="row">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${actionmovie.backdrop_path}`}
          alt=""
          width="inherit"
          height="inherit"
          effect="blur"
        ></LazyLoadImage>
        <div className="append">
          <div className="pd-1">
            <h1>{actionmovie.title}</h1>
            <p className="disp">{`${actionmovie.overview.slice(
              0,
              80
            )}+". . .`}</p>
            <h3 className="disp"> action . {actionmovie.original_language}</h3>
            <div className=" btns">
              <button className="disp"  value={actionmovie.id} onClick={(e) => {
                  history.push(`/movies/${actionmovie.id}`)
                  window.location.reload();
              }}>play</button>
              <button className="disp" value={actionmovie.id} onClick={(e) => {
                e.preventDefault()
              // sessionStorage.getItem("sessionuser")
              fetch("/user/watchlist",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser"),movie:e.target.value}})
    }).then((res) => {return res.json()})
    .then((res) => {
        
       
     
        })
    .catch(error => console.error(error))
              }}>watchlist</button>
              <button className="disp"  value={actionmovie.id} onClick={(e) => {
                e.preventDefault()
              // sessionStorage.getItem("sessionuser")
              fetch("/user/fav",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser"),movie:e.target.value}})
    }).then((res) => {return res.json()})
    .then((res) => {
        
        
     
        })
    .catch(error => console.error(error))
    
    
              }}>favorite</button>
            </div>
          </div>
        </div>
      </div>):(<div className="row-trend">
        <img
          src={`https://image.tmdb.org/t/p/original/${actionmovie.backdrop_path}`}
          alt=""
        ></img>
        <div className="append-trend">
          <div className="down pd-1">
            <h1>{actionmovie.name}</h1>
            <p className="">{`${actionmovie.overview.slice(
              0,
              80
            )}+". . .`}</p>
            <h3 className=""> action . {actionmovie.original_language}</h3>
            <div className=" btns">
              <button className=" " value={actionmovie.id} onClick={() => {
                history.push(`/movies/${actionmovie.id}`)
              }}>play</button>
              <button className=" " value={actionmovie.id} onClick={(e) => {
                e.preventDefault()
              // sessionStorage.getItem("sessionuser")
              fetch("/user/watchlist",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser"),movie:e.target.value}})
    }).then((res) => {return res.json()})
    .then((res) => {
        
        
     
        })
    .catch(error => console.error(error))
              }}>watchlist</button>
              <button className="" value={actionmovie.id} onClick={(e) => {
                e.preventDefault()
              // sessionStorage.getItem("sessionuser")
              fetch("/user/fav",{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({user:{id:sessionStorage.getItem("sessionuser"),movie:e.target.value}})
    }).then((res) => {return res.json()})
    .then((res) => {
        
       
     
        })
    .catch(error => console.error(error))
              }}>favorite</button>
            </div>
          </div>
        </div>
      </div>)}
      
    </>
  );
};
