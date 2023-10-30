import React, {useState, useEffect} from "react"
import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import icon from "../../asserts/main2logo.png"
import ContentWrapper from "../card/ContentWrapper"
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import logout from '../../asserts/logout.png'
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown"
import firebase from "../../firebase/FirebaseConfig"


const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
  
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

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=2a36b5d7ff9941250a0b0615c734f9e6`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setShowSearch(true);
    };

    return (

        <>
        

            {
            !userId ? (
                []
               
            ) : (
                <nav>
                <Link to="/"><img className="main-logo" src={icon} alt=""/></Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span ></span>
            </div>
                <ul className={menuOpen ? "open" : ""}>
                {showSearch && (<div className="searchBar">
                        <ContentWrapper>
                    <div className="searchInput">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyUp={searchQueryHandler}
                                />
                                <VscChromeClose
                                  onClick={() => setShowSearch(false)}
                                />
                            </div>
                            
                            </ContentWrapper>
                    </div>)}
                    
                <li className="search-icon"><HiOutlineSearch onClick={openSearch} size={30}/></li>
              
                    <li>
                    <NavLink to="/movies/popular" style={{textDecoration: "none"}}>Popular</NavLink>
                    </li>
                    <li>
                    <NavLink to="/movies/top_rated" style={{textDecoration: "none"}}>Top Rated</NavLink>
                    </li>
                    <li>
                    <NavLink to="/movies/upcoming" style={{textDecoration: "none"}}>Upcoming</NavLink>
                    </li>
                    <span className="userName">{username}</span>
                        <Dropdown/>        
                        <img alt="" className='logout' src={logout} onClick={() => firebase.auth().signOut()} />
                    </ul>
                    </nav>
            )
        }
               
               </>

          
    )
}

export default Header