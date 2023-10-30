import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Movie from './components/movielist/Movielist';
import Moviedetails from './components/pages/details/Movie'
import Footer from './components/footer/Footer';
import Membership from './components/pages/membership/Membership';
import Login from './layout/Login'
import Register from './layout/Register'
import About from './components/pages/about/About';
import SearchResult from './components/pages/details/Search';
import Player from './components/player/Player';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Header/>
        <Routes>
        <Route index element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>       
                <Route path="/search/:query" element={<SearchResult/>}></Route>
                <Route path="movie/:id" element={<Moviedetails/>}></Route>
                <Route path="movies/:type" element={<Movie/>}></Route>
                <Route path="/membership" element={<Membership/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="player" element={<Player/>}></Route>            
            </Routes>
            <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
