import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MovieResults = () => {
    let navigate = useNavigate();
     const { Id } = useParams();
     const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const { data } = await axios.get(`https://www.omdbapi.com/?i=${Id}&apikey=3e685048`);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details", error);
            }
        }

        fetchMovieDetails();
    }, [Id]);

    const[loading, setLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2606);
        }, []);


    if (loading) {
        return <>
        <div className='text-white bg-black relative h-screen flex flex-col items-center justify-center '> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" transition-all ease-in-out motion-safe:animate-bounce stroke-amber-500 relative h-screen pt-32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <div className='text-4xl  bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300 bg-clip-text font-extrabold text-transparent text-center select-auto sticky bottom-14'>Loading...</div>
        </div>
        <Footer></Footer>
        </>
    }

  return (
    
    <div className='min-h-screen'>
        
        <NavigationBar>
            
        </NavigationBar>
        <div className='bg-black'>
            <button 
                    onClick={() => navigate("/Movies")}
                    className='z-10 text-amber-950 hover:text-white active:text-white'>
                    <div 
                        className='z-10 absolute left-6 top-6 text-xs flex items-center justify-center rounded shadow-2xl drop-shadow-md outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-none hover:outline-white active:bg-orange-800  active:outline-orange-400 invisible sm:visible' 
                        >  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" class="size-6 stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg> 
                        <div className='px-2 text-white'>
                        Return to movie search
                        </div>
                    </div>
                </button>
        </div>
        <div className="flex h-auto w-full justify-center bg-black pb-2">
            <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl box-content text-transparent text-center select-none">
            Enjoy your Movie!
            </span>
            <h1
                className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-6xl text-transparent text-center select-auto">
                Enjoy your Movie!
            </h1>
        </div>
        <div className='bg-black flex items-center justify-center'>
            <button 
                    onClick={() => navigate("/Movies")}
                    className='z-10 text-amber-950 hover:text-white active:text-white'>
                    <div 
                        className='z-10 text-xs flex items-center justify-center rounded shadow-2xl drop-shadow-md outline outline-offset-2 outline-4 outline-deep-orange-400-accent hover:border-none hover:bg-none hover:outline-white active:bg-orange-800  active:outline-orange-400 invisible sm:visible' 
                        >  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" class="size-6 stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg> 
                        <div className='px-2 text-white'>
                        Return to movie search
                        </div>
                    </div>
                </button>
        </div>
       <div className=' min-h-screen mx-0 my-auto w-full flex justify-center flex-wrap bg-black h-full'>
          <div className='w-full flex justify-between h-full'>
            <div className='flex items-center justify-around border-8 border-double border-amber-500 rounded-sm p-5 m-8  text-xl font-bold text-white w-11/12'>

              <div className='w-96'>
                <h1 className='text-amber-500 text-6xl flex flex-col text-center   
                relative top-0 w-96 h-auto py-4 justify-center bg-gradient-to-r from-orange-800 via-amber-500 to-yellow-300 bg-clip-text text-transparent select-auto'>
                        <span className='font-mono font-thin text-xs text-gray-700'>(Title) </span>
                    {movie.Title}
                </h1>
                <div className='text-white font-thin'>
                    <span className='font-mono text-amber-500'>Year: </span>
                        {movie.Year}
                </div>
                <div className='text-white f font-thin max-w-96'>
                    <span className='font-mono text-amber-500'>Rating: </span>
                        {movie.Rated}
                </div>
                <div className='text-white f font-thin max-w-96'>
                    <span className='font-mono text-amber-500'>Plot: </span>
                        {movie.Plot}
                </div>
                <div className='text-white font-thin max-w-96'>
                    <span className='font-mono text-amber-500'>Genre: </span>
                        {movie.Genre}
                </div>
                <div className='text-white font-thin max-w-96'>
                    <span className='font-mono text-amber-500'>Director: </span>
                        {movie.Director}
                </div>
                <div className='text-white font-thin max-w-96'>
                    <span className='font-mono text-amber-500'>Language: </span>
                        {movie.Language}
                </div>
              </div>
              <div className='text-white'>
                <img className='h-96 w-64' src={movie.Poster} alt={`${movie.Title} poster`} />
              </div>
            </div>
            
          </div>
          

        </div>
        <Footer></Footer>
    </div>
  )
}

export default MovieResults;



