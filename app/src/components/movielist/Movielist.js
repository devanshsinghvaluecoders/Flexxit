import React, {useEffect, useState} from "react"
import "./Movielist.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"

const MovieList = () => {
    const [MovieList, setMovieList] = useState([])
    const { type } = useParams()

   
    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=2a36b5d7ff9941250a0b0615c734f9e6`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    MovieList.map(movie => (
                        <Cards movie={movie}/>
                    ))
                }
                {/* MovieList.map((movie.index)=>{<div key={index}>
                    <Cards/>  
                    </div>}
                    ) */}

            </div>
           
        </div>
    )
}

export default MovieList