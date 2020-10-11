import React, { useState, useEffect } from "react";
import { StyledApp, Header, Container } from "./StyledApp";

import { fetchMovies } from "./Api/Api";

import Filter from "./Components/Filter/Filter";
import Categories from "./Components/Categories/Categories";
import Movie from "./Components/Movie/Movie";
import Pagination from "./Components/Pagination/Pagination";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [title, settitle] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const [totalMovies, setTotalMovies] = useState(0);
  const [endpoint, setEndPoint] = useState("movie/popular?");
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const dataMovies = await fetchMovies(endpoint);
      setMovies(dataMovies.results);
      setTotalMovies(dataMovies.total_results);
      const { genres } = await fetchMovies("genre/movie/list");
      setGenres(genres);
    };

    fetch();
  }, []);

  const handleSearchMovie = async (e) => {
    const value = e.target.value;
    let response = [];

    if (value !== "") {
      const newEndPoint = `search/movie?query=${encodeURI(value)}&`;
      response = await fetchMovies(newEndPoint);
      setEndPoint(newEndPoint);
      settitle("Most Popular");
    } else {
      response = await fetchMovies(endpoint);
    }
    setMovies(response.results);
  };

  const handleFilter = async (e) => {
    console.log(e.target.value);
    let response = [];

    switch (e.target.value) {
      case "all":
        response = await fetchMovies("movie/popular");
        setMovies(response.results);
        settitle("Most Popular");
        setEndPoint("movie/popular?");

        break;
      case "now":
        response = await fetchMovies("movie/now_playing");
        setMovies(response.results);
        settitle("Now Playing");
        setEndPoint("movie/now_playing?");

        break;
      case "top":
        response = await fetchMovies("movie/top_rated");
        setMovies(response.results);
        settitle("Top Rated");
        setEndPoint("movie/top_rated?");

        break;
      case "up":
        response = await fetchMovies("movie/upcoming");
        setMovies(response.results);
        settitle("Upcoming");
        setEndPoint("movie/upcoming?");
        break;
      default:
        break;
    }
  };

  const handleFilterGenres = async (e) => {
    const value = e.target.value;
    let response;
    if (value === "all") {
      response = await fetchMovies(endpoint);
      setMovies(response.results);
      settitle("Most Popular");
    } else {
      const newEndPoint = `discover/movie?with_genres=${value}&`;
      response = await fetchMovies(`${newEndPoint}`);
      setMovies(response.results);
      setEndPoint(newEndPoint);
    }
  };

  const handlePaginate = async (number) => {
    console.log(number);
    console.log(endpoint);
    const { results } = await fetchMovies(`${endpoint}page=${number}`);
    // console.log(results);
    setMovies(results);
  };

  return (
    <StyledApp>
      <Header>
        <div className="sidebar">
          <h2>Movie App</h2>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input
            className="search-movie"
            type="text"
            placeholder="Find whatever you want"
            onChange={(e) => handleSearchMovie(e)}
          />
        </div>
      </Header>
      <Container>
        <div className="left-side"></div>
        <div className="filter-container">
          <h3>{title}</h3>
          <div className="filter">
            <Filter
              defaultValue={{ name: "All movies", id: "all" }}
              values={[
                { name: "Now Playing", id: "now" },
                { name: "Top Rated", id: "top" },
                { name: "Upcoming", id: "up" },
              ]}
              handleFilter={handleFilter}
            />

            <Filter
              defaultValue={{ name: "All Genres", id: "all" }}
              values={genres}
              handleFilter={handleFilterGenres}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="left-side">
          <Categories />
        </div>
        <div className="right-side">
          <div className="movies">
            {movies
              // .filter((_, i) => i < 1)
              .map((movie, i) => {
                return <Movie key={i} {...movie} />;
              })}
          </div>
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={totalMovies}
            paginate={handlePaginate}
          />
        </div>
      </Container>
    </StyledApp>
  );
}

export default App;
