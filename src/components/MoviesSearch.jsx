import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MovieSearch = () => {
  const { Title } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(Title || "");
  let navigate = useNavigate();

  function onSearch() {
    fetchMovie(searchMovie)
  }

  async function fetchMovie(movieTitle) {
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?s=${movieTitle}&apikey=3e685048`);
      setMovies(data);
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
    } catch (error) {
      console.log("Error fetching movie data", error);
    }
  }
  useEffect(() => { 
    fetchMovie(Title);
  }, [Title]);

  return (

    <div className='min-h-screen flex flex-col flex-1 bg-black'>
      <NavigationBar ></NavigationBar>
      <div className='h-full bg-black'>
      <div className='flex flex-wrap flex-col items-center justify-center z-2 mt-1/2 pt-5 bg-black w-full'>
        <div className='max-w-2xl relative rounded-full'>
          <input 
            value={searchMovie} 
            onChange={(event) => setSearchMovie(event.target.value)} 
            onClick={() => onSearch()} 
            onKeyDown={(event) => event.key === 'Enter' && onSearch()}
            type="text" 
            placeholder='SEARCH MOVIE HERE' 
            className='relative text-center items-center justify-center bg-yellow-300 inline-block min-h-16 leading-10  border-4 border-amber-500 rounded-full max-w-96 text-xl overflow-hidden px-12' />
        </div>
      </div>

      <div className="flex h-auto w-full justify-center bg-black">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        Enjoy your Movie!
        </span>
        <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            Enjoy your Movie!
        </h1>
      </div>

<div className='grid grid-cols-3 gap-4 items-center justify-center m-4'>
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <div className='flex'>
                <div
                  key={movie.imdbID}
                  onClick={() => navigate(`/${movie.imdbID}`)}
                  className=" h-auto my-auto justify-center bg-black cursor-pointer  "
                  >
                  <div className="mt-8 w-full justify-between">
                    <div className=" border-4 border-double border-amber-500 hover:outline-dashed hover:outline-8 hover:outline-orange-800 hover:border-dashed p-5 mb-8 text-xl font-bold text-white w-full max-w-72 flex flex-col items-center justify-center text-center">
                      <div className="font-thin text-gray-500">Title: <span className='font-extrabold text-white'> {movie.Title} </span> </div>
                      <div className="font-thin  text-gray-500">Year: <span className='font-extrabold text-white'>  {movie.Year} </span> </div>
                      <div className="text-white h-auto w-auto max-w-72 ">
                        <img src={movie?.Poster} alt={`${movie.Title} poster`} />
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  ))
                  ) : (
                    <div className="text-white flex items-center justify-center font-thin pl-1">Searching for:<span className='font-extrabold font-mono pl-3'>{searchMovie} </span> ... </div>
                    )} 
</div>



        <h5 className='text-white bg-black font-thin pb-5 pl-5'> End of search results for:<span className='font-extrabold font-mono pl-3'> {searchMovie} </span> </h5>
        </div>
    <Footer ></Footer>
    </div>
  );
}

export default MovieSearch;
