// We use Read.js here and its imported in App.js
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

const Read = () => {
  const [movies, setMovies] = useState([]);


      useEffect(
        ()=>{
          // Runs in the background. Makes sure program doesn't hang
          // Requests data from the API
          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
          //
          .then((response)=>{
            console.log(response.data);
            setMovies(response.data.movies);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return( 
            <div>
            <h3>Hello from read component</h3>
            <Movies myMovies={movies}/>
            </div>
        );
    
  };
  // This gets called in app.js to use header function
  export default Read;