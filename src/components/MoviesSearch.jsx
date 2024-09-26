import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MovieSearch = () => {
  const { Title } = useParams();
  const [post, setPosts] = useState([]);
  const [searchMovie, setSearchMovie] = useState(Title || "");
  let navigate = useNavigate();

  function onSearch() {
    fetchMovie(searchMovie)
  }

  async function fetchMovie(movieTitle) {
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=3e685048`);
      setPosts(data);
    } catch (error) {
      console.log("Error fetching movie data", error);
    }
  }
  useEffect(() => { 
    fetchMovie(Title);
  }, [Title]);

  return (

    <div className='min-h-screen flex flex-col flex-1 '>
      <NavigationBar title="Find" ></NavigationBar>
      <div className='h-screen bg-black'>
      <div className='flex flex-wrap flex-col items-center justify-center z-2 mt-1/2 pt-5 bg-black w-full'>
        <div className='max-w-2xl relative rounded-full'>
          <input 
            value={searchMovie} 
            onChange={(event) => setSearchMovie(event.target.value)} 
            // onClick={() => onSearch()} 
            onKeyDown={(event) => event.key === 'Enter' && onSearch()}
            type="text" 
            placeholder='SEARCH' 
            className='relative text-center items-center justify-center bg-yellow-300 inline-block min-h-16 leading-10  border-4 border-amber-500 rounded-full max-w-96 text-xl overflow-hidden' />
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
        
        {/* Movie details rendering */}


        {/* {posts.map(post => <div>{post.Title}</div>)} */}


        {post && (
        <>
          <div onClick={() => navigate(`/${post.imdbID}`)} className='mx-0 my-auto w-full max-w-7xl flex justify-center flex-wrap bg-black cursor-pointer'>
            <div className='mt-8 w-full flex flex-wrap justify-between'>
              <div className='border-8 border-double border-amber-500 rounded-sm p-5 mb-8 text-xl font-bold text-white w-full max-w-72 flex flex-col items-center justify-center text-center'>
                <div className='text-white'>
                  Title: {post.Title} 
                </div>
                <div className='text-white'>
                  Year: {post.Year}
                </div>
                <div className='text-white'>
                  <img src={post.Poster} alt={`${post.Title} poster`} />
                </div>
              </div>
            </div>
          </div>
        </>
        )}
        <h5 className='text-white bg-black font-thin pb-5 pl-5'> End of search results for:   <span className='font-extrabold font-mono'> {searchMovie} </span> </h5>
        </div>
    <Footer></Footer>
    </div>
  );
}

export default MovieSearch;
