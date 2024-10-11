const MovieItem = (props) => {
    return(
            <div>
                <h3>{props.myMovie.Title}</h3>
                <img src={props.myMovie.Poster}></img>
                <p>{props.myMovie.Year}</p>

            </div>
        );
}

export default MovieItem;