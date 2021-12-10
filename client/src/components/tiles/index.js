import "./style.css";
import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import { AiFillPlayCircle,AiFillCloseCircle} from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Tiles = ({actionmovie,remove,type}) => {
    const history = useHistory()
   
    return <>
    <div className="row">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${actionmovie.backdrop_path}`}
          alt=""
          effect="blur"
          width="inherit"
          height="inherit"
        ></LazyLoadImage>
        <div className="append">
          {remove === true ?
          <AiFillCloseCircle className="del" onClick={(e) => {
            e.preventDefault()
            fetch(`/user/${type}/delete/${actionmovie.id}/${sessionStorage.getItem("sessionuser")}`,{ 
              method: 'DELETE'
            })
            .then(res =>{return res.json()})
            .then((res) => {
              if(res.status === true) {window.location.reload()}
            })
          }}/>
            :""
        }
          <div className="pd-1">
            <h1>{actionmovie.title}</h1>
            <p className="disp">{`${actionmovie.overview.slice(
              0,
              80
            )}+". . .`}</p>
            <h3 className="disp"> action . {actionmovie.original_language}</h3>
            <div className=" btns">
              <AiFillPlayCircle className="play" value={actionmovie.id} onClick={(e) => {
                  history.push(`/movies/${actionmovie.id}`)
                  window.location.reload();
              }}/>
              <button className="disp " value={actionmovie.id} onClick={(e) => {
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
              <button className="disp " value={actionmovie.id} onClick={(e) => {
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
      </div>
    </>
}