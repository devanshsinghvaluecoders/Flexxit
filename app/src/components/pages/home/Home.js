import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CircleRating from "../../ratingIcon/CircleRating";
import MovieList from "../../movielist/Movielist";
import firebase from "../../../firebase/FirebaseConfig";
import Login from "../../../layout/Login";
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setUserId(user.uid);
        setUsername(user.displayName);

      }else{
        setUserId("");
        setUsername("");
      }
    })
  },[userId]);

  useEffect(() => {
    fetch(
      "http://api.themoviedb.org/3/movie/popular?api_key=2a36b5d7ff9941250a0b0615c734f9e6"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
    {
      !userId? (
        <Login/>
       
      ) :  (
        <div className="poster">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={4}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                alt=""/>
              </div>
              <div className="posterImage__overlay">
                <span className="posterImage__rating">
                  <CircleRating rating={movie.vote_average.toFixed(1)} />
                </span>
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>

                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
                <div className="trailer-btn">
               
                  <button className="trailer" onClick={() => navigate('/player')}> <FaPlay size={20}/>Play</button>
                  <button className="info"><AiOutlineInfoCircle size={30}/>More Info</button>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
      )
    }
     
    </>
  );
};

export default Home;
