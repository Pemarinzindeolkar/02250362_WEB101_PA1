import React, { useEffect, useState } from "react"; // Import React and hooks
import "../scss/Home.scss"; // Import styling for Home component
import axios from "axios"; // Import axios for API requests
import { Link } from "react-router-dom"; // Import Link for routing to genres
import { BiPlay } from "react-icons/bi"; // Import Play icon
import { AiOutlinePlus } from "react-icons/ai"; // Import Plus icon
import myBanner from "../assets/myBanner.jpg"; // Import banner image

// API Configuration
const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214"; // TMDb API Key
const url = "https://api.themoviedb.org/3"; // Base URL for TMDb API
const imgUrl = "https://image.tmdb.org/t/p/original"; // Base URL for movie poster images
const upcoming = "upcoming"; // Endpoint for upcoming movies
const nowPlaying = "now_playing"; // Endpoint for now playing movies
const popular = "popular"; // Endpoint for popular movies
const topRated = "top_rated"; // Endpoint for top-rated movies

// Card Component: Displays single movie poster
const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

// Row Component: Displays a row of movie cards with a title
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

// Home Component: Main page
const Home = () => {
  // State variables to store movie data
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  // Fetch movie data from TMDb API when component mounts
  useEffect(() => {
    // Fetch upcoming movies
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    // Fetch now playing movies
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    // Fetch popular movies
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    // Fetch top rated movies
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    // Fetch all movie genres
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres); // Save genres in state
      // console.log(genres);
    };

    // Call all API fetch functions
    getAllGenre();
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <section className="home">
      {/* Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${myBanner})`, // Set banner background
        }}
      >
        <h1>GOAT</h1>
        <p>
          “GOAT” is an animated sports‑comedy about Will Harris, a small but
          determined goat who dreams of playing professional roarball — a
          fast‑paced, full‑contact sport in a world of anthropomorphic animals.
          Despite being undersized, Will gets a rare chance to join a pro team
          and must prove that heart and talent matter more than size. The film
          blends high‑energy action, comedy, and heart‑warming underdog themes.
        </p>

        {/* Banner Buttons */}
        <div>
          <button onClick={() => window.location.reload()}>
            <BiPlay /> Play
          </button>
          <button onClick={() => window.location.reload()}>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>

      {/* Movie Rows */}
      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />

      {/* Genre Links */}
      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;