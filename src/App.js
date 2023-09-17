import { Row } from "antd";
import "./App.css";
import MoviesList from "./components/movies";
import SearchInput from "./components/searchInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Spinner from "./components/Spinner";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [debouncedValue] = useDebounce(query, 1000);

  useEffect(() => {
    const fetchMovies = async () => {
      let res = await axios.get(
        `http://www.omdbapi.com/?apikey=891203b7&s=${debouncedValue}&page=${page}`
      );
      const data = await res.data;

      if (data.Response === "False") {
        setMovies(data.Error);
        setLoading(false);
      } else {
        setMovies(data);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedValue, page]);

  return (
    <>
      <Row justify={"center"} className="searchInput">
        <SearchInput query={query} setQuery={setQuery} />
      </Row>
      {loading && <Spinner />}

      {debouncedValue ? (
        <MoviesList
          setPage={setPage}
          movies={movies}
          debouncedValue={debouncedValue}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>
          👆 Enter the Movie Title above to watch movies List 👆
        </h1>
      )}
    </>
  );
};

export default App;
