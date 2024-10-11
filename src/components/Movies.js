import MovieItem from "../MovieItem";

const Movies = (props) => {
    return props.myMovies.map(
        ()=>{
            return <MovieItem/>
        }
    );
}

export default Movies;