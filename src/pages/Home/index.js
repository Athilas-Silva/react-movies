import { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "./styles";
import { apiKey } from "../../config/key";
import { Link } from "react-router-dom";

function Home(){
    const [movies, setMovies] = useState([]);
    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        //Consumindo API
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            setMovies(data.results)
        })
    }, [])

    return(
        <Container>
            <h1>Movies</h1>

            <MovieList>
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt="Poster do Homem Aranha"/>
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    );
                })};
            </MovieList>
        </Container>
    );
}

export default Home;